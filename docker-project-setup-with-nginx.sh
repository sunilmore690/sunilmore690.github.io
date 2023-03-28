#!/bin/bash

# Get Git server endpoint and token
read -p "Enter projects dir path where projects needs to be clone (default:/root/projects): " projects_dir
read -p "Enter Git server endpoint (e.g. github.com/sunilmore690): " git_server
read -p "Enter Git token , If repos are private " git_token
read -p "Provide mongodb docker image version (default:latest)" mongo_version

if [ -z "$mongo_version" ]
then 
  mongo_version=latest
fi

if [ -z "$projects_dir" ]
then
    projects_dir=/root/projects
fi
if [ -z "$git_server" ]
then
    echo "Please provide git server"
    exit 0
fi
# Get project list and domain names
read -p "Enter list of projects separated by spaces (e.g. project1:domain1.com project2:domain2.com): " projects
# Check if Git is installed
if ! command -v git &> /dev/null
then
    echo "Git is not installed. Installing Git..."
    yum install git -y || apt-get install git -y
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker is not installed. Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null
then
    echo "Docker Compose is not installed. Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Create /data/db directory for MongoDB
# Create /data/db directory if it doesn't exist
if [ ! -d "/data/db" ]; then
    sudo mkdir -p /data/db
fi
# Create /data/db directory if it doesn't exist




if [ ! -d "/data/db" ]; then
    sudo mkdir -p $projects_dir
fi
# Clone projects
for project in $projects
do
    # Extract project name and domain name
    project_name=$(echo $project | cut -d ':' -f 1)
    domain_name=$(echo $project | cut -d ':' -f 2)
    # Clone project using Git token
    if [ -z "$git_token" ]
    then
      git clone https://$git_server/$project_name $projects_dir/$project_name
    else
      git clone https://$git_token@$git_server/$project_name $projects_dir/$project_name
    fi
    
done

# Create Nginx configuration file
cat > $projects_dir/nginx.conf <<EOF
events {}
http {
  
EOF

for project in $projects
do
    # Extract project name and domain name
    project_name=$(echo $project | cut -d ':' -f 1)
    domain_name=$(echo $project | cut -d ':' -f 2)
    
    cat >> $projects_dir/nginx.conf <<EOF
    server {
     listen 80;
     server_name $domain_name;

     location / {
       proxy_pass http://$project_name:3000;
       proxy_set_header Host \$host;
       proxy_set_header X-Real-IP \$remote_addr;
     }
    }
EOF
done

cat >> $projects_dir/nginx.conf <<EOF
  }
EOF

# Create Docker Compose file
cat > $projects_dir/docker-compose.yml <<EOF
version: '3'

services:
EOF

for project in $projects
do
    # Extract project name and domain name
    project_name=$(echo $project | cut -d ':' -f 1)
    domain_name=$(echo $project | cut -d ':' -f 2)
    
    cat >> $projects_dir/docker-compose.yml <<EOF
  ${project_name}:
    build: $projects_dir/${project_name}
    ports:
      - "3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - MONGODB_URL=mongodb://mongo/${project_name}
    networks:
      - app-network
EOF
done

cat >> $projects_dir/docker-compose.yml <<EOF
  mongo:
    image: mongo:$mongo_version
    volumes:
      - /data/db:/data/db
    networks:
      - app-network

  nginx:
     image: nginx
     ports:
      - "80:80"
      - "443:443"
     volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
     networks:
      - app-network

networks:
  app-network:
    driver: bridge
EOF
echo "Docker Compose file created successfully"
cd $projects_dir
docker-compose build .
docker-compose up -d

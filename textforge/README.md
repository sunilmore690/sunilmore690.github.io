# TextForge — Landing Page

Single-file landing page for the TextForge Chrome extension.

## What's inside
- `index.html` — the whole site, no build step, no dependencies. Fonts load from Google Fonts.

## How to view locally
Just open `index.html` in any browser. Or run a tiny server:

```bash
cd textforge-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How to deploy (free options)

### Option 1: GitHub Pages (recommended)
1. Create a new GitHub repo (e.g. `textforge-site`)
2. Drop `index.html` in the root, commit, push
3. Repo Settings → Pages → Source: Deploy from branch → `main` → `/root`
4. Site is live at `https://yourusername.github.io/textforge-site/`
5. Add a custom domain later if you want

### Option 2: Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Deploy — done, gets a `*.vercel.app` URL automatically

### Option 3: Cloudflare Pages
1. Push to GitHub
2. Connect on dash.cloudflare.com → Pages → Connect to Git
3. Build command: leave empty. Build output: `/`
4. Deploy

### Option 4: Netlify Drop
Drag the folder onto https://app.netlify.com/drop — instant URL.

## What to change before launch

In `index.html`, search and replace these placeholder links:

| Find | Replace with |
|---|---|
| `href="#install"` on Add to Chrome buttons | Your Chrome Web Store listing URL |
| `View on GitHub` link `href="#"` | Your GitHub repo URL |
| Footer links (GitHub, Privacy, Contact) `href="#"` | Real URLs |
| `<title>` and `<meta name="description">` | Tweak if you want different SEO copy |

## Adding screenshots (optional but recommended)
The animated demo terminal is nice, but real screenshots convert better. To add a screenshot section between the hero and "Why TextForge":

1. Take 3–4 screenshots (popup, icon on textarea, preview modal, model dropdown)
2. Save as `.webp` or `.png` in a `/img` folder
3. Add a new `<section>` with an image grid

If you want me to add that screenshot section, just ask.

## Customizing the look
All colors are CSS variables at the top of the file. Change once, applies everywhere:
- `--ember` / `--ember-2` — the orange accent
- `--paper` — the cream background
- `--ink` — the near-black text
- Swap fonts in the Google Fonts `<link>` tag if you want a different vibe

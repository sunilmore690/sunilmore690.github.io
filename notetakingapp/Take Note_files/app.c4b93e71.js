(function(t){function e(e){for(var s,i,l=e[0],r=e[1],c=e[2],u=0,h=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,l=1;l<o.length;l++){var r=o[l];0!==n[r]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"080e":function(t,e,o){"use strict";o("8c5f")},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{attrs:{id:"app"}},[o("DashBoard",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Take Note")])])}],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",[o("el-col",{attrs:{span:8}},[o("SideList",{attrs:{notes:t.notes,note:t.note},on:{setnote:t.handleSetNote,addnote:t.handleAddNote,removenote:t.handleRemoveNote}})],1),o("el-col",{attrs:{span:16}},[o("Note",{attrs:{note:t.note,tags:t.tags},on:{savenote:t.handleSaveNote,updatetags:t.handleUpdateTags}})],1)],1)},l=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",[o("div",{staticStyle:{"margin-bottom":"17px"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("div",{staticStyle:{"text-align":"left"}},[o("el-select",{attrs:{placeholder:"Select"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}},t._l(t.sortOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),o("el-col",{attrs:{span:12}},[o("div",{staticStyle:{"text-align":"right"}},[o("span",{staticStyle:{"padding-right":"20px"}},[t._v(t._s(t.mynotes.length)+" / "+t._s(t.notes.length)+" Notes")]),o("el-button",{staticClass:"add-note-btn",attrs:{size:"small",round:""},on:{click:function(e){return t.addNote()}}},[t._v("+ Add Note")])],1)])],1)],1),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("el-input",{attrs:{placeholder:"search notes ...",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("div",{staticStyle:{height:"75vh","overflow-y":"auto"}},t._l(t.mynotes,(function(e){return o("div",{key:e.id,on:{click:function(o){return t.setNote(e)}}},[o("note-unit",{attrs:{noteobj:e,note:t.note},on:{removenote:t.handleRemove}})],1)})),0)])},c=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{mouseover:function(e){t.close=!0},mouseleave:function(e){t.close=!1}}},[o("el-card",{staticClass:"box-card note-list-unit",class:{active:t.note.id===t.noteobj.id}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.close,expression:"close"}],staticStyle:{position:"absolute"}},[o("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v("Are you sure to delete this?")]),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible=!1}}},[t._v("cancel")]),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.handleDeleteNote(t.note),t.visible=!1}}},[t._v("confirm")])],1),o("el-button",{attrs:{slot:"reference",type:"danger",size:"small",round:""},slot:"reference"},[t._v("X")])],1)],1),o("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t._f("trim")(t.noteobj.title,40)))]),o("el-row",{staticStyle:{"font-size":"smaller","padding-top":"10px"}},[o("el-col",{attrs:{span:12}},[t._v("Created :"+t._s(t._f("formatDate")(t.noteobj.created)))]),o("el-col",{attrs:{span:12}},[t._v("Updated : "+t._s(t._f("formatDate")(t.noteobj.updated)))])],1)],1)],1)},u=[],h={props:["noteobj","note"],data(){return{close:!1,visible:!1}},methods:{handleDeleteNote(t){this.$emit("removenote",t)}},filters:{trim(t="",e=10){return t.length<=30?t:t.slice(0,e)+"..."},formatDate(t){try{t||(t=new Date);let e=t.toLocaleString("default",{month:"short"});return`${t.getDate()}-${e}-${t.getFullYear()}`}catch(e){t=new Date;let o=t.toLocaleString("default",{month:"short"});return`${t.getDate()}-${o}-${t.getFullYear()}`}}}},p=h,m=(o("bad9"),o("2877")),v=Object(m["a"])(p,d,u,!1,null,"8e3ce850",null),f=v.exports,g={props:["notes","note"],data(){return{mynotes:[],sortOptions:[{label:"Last Updated Notes",value:"updatedDesc"},{label:"Old Created Notes",value:"createdAsc"},{label:"Oldest  Updated Notes",value:"updatedAsc"},{label:"Latest  Created Notes",value:"createdDesc"}],search:"",close:!1,sortBy:"updatedDesc"}},watch:{notes(){this.mynotes=this.notes},sortBy(){this.sortNotes()},search(){this.search?this.search.trim()&&(this.search.length<3||(this.mynotes=this.mynotes.filter(t=>{const e=t.title||"";return e.match(new RegExp(this.search,"i"))||Array.isArray(t.tags)&&t.tags.includes(this.search)}))):this.mynotes=this.notes}},methods:{addNote(){this.$emit("addnote")},sortNotes(){this.mynotes=this.mynotes.sort((t,e)=>(t.created=t.created?new Date(t.created):new Date,t.updated=t.updated?new Date(t.updated):new Date,e.updated=e.updated?new Date(e.updated):new Date,e.created=e.created?new Date(e.created):new Date,"createdAsc"===this.sortBy?t.created.getTime()-e.created.getTime():"createdDesc"===this.sortBy?e.created.getTime()-t.created.getTime():"updatedAsc"===this.sortBy?t.updated.getTime()-e.updated.getTime():"updatedDesc"===this.sortBy?e.updated.getTime()-t.updated.getTime():t.title))},setNote(t){this.$emit("setnote",t)},handleRemove(t){this.$emit("removenote",t)}},mounted(){this.sortNotes()},components:{NoteUnit:f}},y=g,b=Object(m["a"])(y,r,c,!1,null,"0ad014ae",null),N=b.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"note"},[t.editMode?o("div",[o("div",{staticStyle:{"margin-bottom":"10px"}},[o("el-input",{attrs:{placeholder:"Title goes here ..."},on:{change:t.saveNote},model:{value:t.mynote.title,callback:function(e){t.$set(t.mynote,"title",e)},expression:"mynote.title"}})],1),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter your tags here..."},on:{change:t.saveNote},model:{value:t.mynote.tags,callback:function(e){t.$set(t.mynote,"tags",e)},expression:"mynote.tags"}},t._l(t.tags||[],(function(t){return o("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),o("vue-editor",{staticClass:"margin-bottom10",staticStyle:{height:"700px","overflow-y":"scroll"},model:{value:t.mynote.body,callback:function(e){t.$set(t.mynote,"body",e)},expression:"mynote.body"}})],1):o("div")])},w=[],_=o("5873"),x={props:["note","tags"],data(){return{mynote:{},editMode:!0,saveTimeout:null}},components:{VueEditor:_["a"]},watch:{note(){this.mynote=Object.assign({},this.note)}},methods:{startSaveTimeout(){null===this.saveTimeout&&(this.saveTimeout=setInterval(()=>{this.mynote.body!==this.note.body&&this.saveNote()},1e3))},clearSaveTimeout(){clearInterval(this.saveTimeout),this.saveTimeout=null},saveNote(){this.$emit("savenote",this.mynote)},saveTags(){this.$emit("updatetags",this.mynote.tags),this.saveNote()}},mounted(){this.startSaveTimeout()},destroyed(){this.clearSaveTimeout()}},D=x,T=(o("080e"),Object(m["a"])(D,S,w,!1,null,null,null)),O=T.exports;const $={id:1,title:"New Title",body:"content Goes Here",lastSaved:null};var j={data(){return{note:{},notes:[],tags:[]}},components:{SideList:N,Note:O},methods:{handleSetNote(t){this.note=t},handleAddNote(){this.note={...$,id:this.notes.length+1,created:new Date},this.notes.push({...this.note}),this.storeNotes()},handleSaveNote(t){this.note=t,this.note.updated=new Date,this.notes=this.notes.map(e=>e.id===t.id?t:e),this.storeNotes()},storeNotes(){localStorage.setItem("notes",JSON.stringify(this.notes))},handleRemoveNote(t){this.notes=this.notes.filter(e=>e.id!==t.id),this.note.id===t.id&&(this.notes.length?this.handleSetNote(this.notes[0]):this.handleAddNote()),this.storeNotes()},handleUpdateTags(t){t=[...this.tags,...t],this.tags=[...new Set(t)],localStorage.setItem("tags",JSON.stringify(this.tags))}},mounted(){try{let t=localStorage.getItem("notes"),e=localStorage.getItem("tags");e&&(this.tags=JSON.parse(e)),t?t=JSON.parse(t):this.handleAddNote(),this.notes=t,this.notes.length?this.handleSetNote(this.notes[0]):this.handleAddNote()}catch(t){this.notes=[]}}},k=j,A=Object(m["a"])(k,i,l,!1,null,null,null),B=A.exports,E={name:"App",components:{DashBoard:B}},C=E,P=(o("034f"),Object(m["a"])(C,n,a,!1,null,null,null)),I=P.exports,J=o("5c96"),L=o.n(J),M=(o("0fae"),o("b2d6")),U=o.n(M);s["default"].config.productionTip=!1,s["default"].use(L.a,{locale:U.a}),new s["default"]({render:t=>t(I)}).$mount("#app")},"85ec":function(t,e,o){},8772:function(t,e,o){},"8c5f":function(t,e,o){},bad9:function(t,e,o){"use strict";o("8772")}});
//# sourceMappingURL=app.c4b93e71.js.map
(function(e){function t(t){for(var n,r,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-5edadf04":"4d7cefa3","chunk-fa9372ac":"24b3a9aa"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-5edadf04":1,"chunk-fa9372ac":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-5edadf04":"b3845dc0","chunk-fa9372ac":"dcaca65c"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/movie-explorer/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3a2e":function(e,t,a){"use strict";a("99af");var n=a("bc3a"),r=a.n(n),o="a7b66ad3a98a9379e6353f576ca067d2";t["a"]={fetchSingleMovie:function(e){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o)).then((function(e){return e.data}))},fetchMovieCredits:function(e){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o)).then((function(e){return e.data}))},fetchMovieImages:function(e){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/images?api_key=").concat(o)).then((function(e){return e.data}))},fetchMovieRecommendations:function(e){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=").concat(o)).then((function(e){return e.data}))},fetchMovieCollection:function(e,t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&page=").concat(t)).then((function(e){return e.data}))},searchMovies:function(e,t){return r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=").concat(t,"&include_adult=false")).then((function(e){return e.data}))}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("TheNavbar"),a("v-content",[a("router-view",{key:this.$route.path})],1),a("footer",{staticClass:"text-center white--text black"},[a("div",[e._v("© "+e._s((new Date).getFullYear())+", made with"),a("v-icon",{staticClass:"red--text px-1",attrs:{small:""}},[e._v("mdi-heart-multiple")]),a("a",{staticClass:"white--text",attrs:{href:"https://github.com/bmonte",target:"_blank"}},[e._v("bmonte")])],1)])],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-toolbar-title",{on:{click:function(t){return e.homePage()}}},[a("v-icon",{attrs:{"x-large":""}},[e._v("mdi-movie")]),a("span",{staticClass:"navbar_title hidden-sm-and-down"},[e._v("MovieExplorer")])],1),a("v-spacer"),a("div",{staticClass:"mt-5 mr-4"},[a("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify"},on:{change:function(t){return e.searchMovie(e.search)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)},c=[],s=(a("ac1f"),a("841c"),{data:function(){return{search:""}},methods:{searchMovie:function(e){e&&(this.$router.push({name:"Search",query:{q:e}}),this.search="")},homePage:function(){this.$router.push({name:"Home",query:{page:1}})}}}),u=s,l=(a("a1e9"),a("2877")),p=a("6544"),f=a.n(p),d=a("40dc"),h=a("132d"),v=a("2fa4"),m=a("8654"),g=a("2a7f"),b=Object(l["a"])(u,i,c,!1,null,"65e7196a",null),y=b.exports;f()(b,{VAppBar:d["a"],VIcon:h["a"],VSpacer:v["a"],VTextField:m["a"],VToolbarTitle:g["a"]});var _={components:{TheNavbar:y},data:function(){return{}}},k=_,x=(a("70ea"),a("7496")),w=a("a75b"),C=Object(l["a"])(k,r,o,!1,null,"737f0a99",null),M=C.exports;f()(C,{VApp:x["a"],VContent:w["a"],VIcon:h["a"]});a("d3b7");var j=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("movie-list",{attrs:{lista:e.movies}}),a("v-pagination",{staticClass:"my-4",attrs:{length:e.movies.total_pages,"total-visible":7},on:{input:function(t){return e.nextPage()}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},P=[],S=(a("5319"),a("3a2e")),E=a("a442"),T={components:{MovieList:E["a"]},data:function(){return{page:1,order_by:"popular",movies:[]}},mounted:function(){this.nextPage()},methods:{nextPage:function(){var e=this;S["a"].fetchMovieCollection(this.order_by,this.page).then((function(t){e.movies=t})),this.$router.replace({name:"Home",query:{page:this.page}})}}},V=T,$=a("891e"),A=Object(l["a"])(V,O,P,!1,null,null,null),q=A.exports;f()(A,{VPagination:$["a"]}),n["a"].use(j["a"]);var N=[{path:"/home",alias:"/",name:"Home",component:q},{path:"/movie/:movie_id",name:"Movie",component:function(){return a.e("chunk-fa9372ac").then(a.bind(null,"def6"))}},{path:"/search",name:"Search",component:function(){return a.e("chunk-5edadf04").then(a.bind(null,"2d3b"))}}],L=new j["a"]({base:"/movie-explorer/",routes:N,scrollBehavior:function(){return{x:0,y:0}}}),B=L,I=a("f309");n["a"].use(I["a"]);var H=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:B,vuetify:H,render:function(e){return e(M)}}).$mount("#app")},"70ea":function(e,t,a){"use strict";var n=a("955c"),r=a.n(n);r.a},"955c":function(e,t,a){},a1e9:function(e,t,a){"use strict";var n=a("f6a4"),r=a.n(n);r.a},a442:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.title?a("h1",{staticClass:"list_title"},[e._v(e._s(e.title))]):e._e(),a("v-row",[a("v-col",{attrs:{cols:"10",offset:"1"}},[a("v-row",e._l(e.lista.results,(function(t){return a("v-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",xl:"2"}},[a("v-card",{staticClass:"d-flex flex-wrap justify-center",attrs:{color:"black"}},[t.poster_path?a("v-img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path},on:{click:function(a){return e.singleMedia(t.id)}}}):a("v-img",{attrs:{src:"https://imagens.liveoficial.com.br/app/img/product/500x750/not-found.jpg"}}),a("v-card-title",{staticClass:"movie_title"},[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)],1)},r=[],o={name:"media-list",props:{title:String,lista:{type:Array,required:!0}},data:function(){return{}},methods:{singleMedia:function(e){this.$router.push({name:"Movie",params:{movie_id:e}}),this.$route.params.pathMatch}}},i=o,c=(a("e816"),a("2877")),s=a("6544"),u=a.n(s),l=a("b0af"),p=a("99d9"),f=a("62ad"),d=a("adda"),h=a("0fd9"),v=Object(c["a"])(i,n,r,!1,null,"a2ae1ca4",null);t["a"]=v.exports;u()(v,{VCard:l["a"],VCardTitle:p["d"],VCol:f["a"],VImg:d["a"],VRow:h["a"]})},bb62:function(e,t,a){},e816:function(e,t,a){"use strict";var n=a("bb62"),r=a.n(n);r.a},f6a4:function(e,t,a){}});
//# sourceMappingURL=app.c261aa3d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5edadf04"],{1010:function(e,t,n){"use strict";var a=n("8330"),i=n.n(a);i.a},"2d3b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search_page"},[e.movies.results.length?n("div",[n("movie-list",{attrs:{lista:e.movies}}),n("v-pagination",{staticClass:"my-4",attrs:{length:e.movies.total_pages,"total-visible":7},on:{input:function(t){return e.nextPage()}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e(),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center mt-4"},[n("h1",[e._v("Nenhum filme encontrado!")])])}],s=n("3a2e"),o=n("a442"),c={components:{MovieList:o["a"]},data:function(){return{page:1,movies:[]}},watch:{"$route.query.q":function(){this.nextPage()}},mounted:function(){this.nextPage()},methods:{nextPage:function(){var e=this;s["a"].searchMovies(this.$route.query.q,this.page).then((function(t){e.movies=t}))}}},u=c,r=(n("1010"),n("2877")),l=n("6544"),v=n.n(l),h=n("891e"),f=Object(r["a"])(u,a,i,!1,null,"ee9a872e",null);t["default"]=f.exports;v()(f,{VPagination:h["a"]})},8330:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5edadf04.4d7cefa3.js.map
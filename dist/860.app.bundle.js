(self.webpackChunkpetstagram=self.webpackChunkpetstagram||[]).push([[860],{1860:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>O});var t=r(7294),i=(r(4593),r(6423)),a=r(4119),u=r.n(a),o=r(9163),c=r(1252);function s(){var e=d(["\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"]);return s=function(){return e},e}function l(){var e=d(["\n  padding-top: 32px;\n"]);return l=function(){return e},e}function f(){var e=d(['\n  border-radius: 8px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  margin: 1%;\n  overflow: hidden;\n  position: relative;\n  width: 31.33%;\n  &:after {\n    content: "";\n    display: block;\n    padding-bottom: 100%;\n  }\n']);return f=function(){return e},e}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=(0,o.ZP)(c.rU)(f()),v=o.ZP.div(l()),b=o.ZP.img(s()),m=r(5697),g=r.n(m),h=function(e){var n=e.favs,r=void 0===n?[]:n;return t.createElement(v,null,r.map((function(e){return t.createElement(p,{key:e.id,to:"/detail/".concat(e.id)},t.createElement(b,{src:e.src}))})))};function E(){var e,n,r=(e=["\n  query getFavs {\n    favs {\n      id\n      categoryId\n      src\n      likes\n      userId\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return E=function(){return r},r}h.propTypes={favs:g().arrayOf(g().shape({id:g().string.isRequired,src:g().string.isRequireds}))};var y=u()(E()),k=function(e){var n=e.loading,r=e.error,i=e.data;if(n)return t.createElement("p",null,"Loading...");if(r)return t.createElement("p",null,"Error!");var a=i.favs;return t.createElement(h,{favs:a})},w=function(){return t.createElement(i.AE,{query:y,fetchPolicy:"network-only"},k)},j=r(7546);const O=function(){return t.createElement(j.A,{title:"Tus favoritos",subtitle:"Aqui puedes encontrar tus favoritos"},t.createElement(w,null))}}}]);
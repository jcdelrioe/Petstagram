(self.webpackChunkpetstagram=self.webpackChunkpetstagram||[]).push([[571],{2608:(e,n,r)=>{"use strict";r.d(n,{M:()=>l});var t=r(7294);function a(){var e,n,r=(e=["\n  background: #8d00ff;\n  border-radius: 3px;\n  color: #fff;\n  height: 32px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  &[disabled] {\n    opacity: 0.3;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return r},r}var i=r(9163).ZP.button(a()),o=r(5697),u=r.n(o),l=function(e){var n=e.disabled,r=e.children,a=e.onClick;return t.createElement(i,{disabled:n,onClick:a},r)};l.propTypes={disabled:u().bool,onClick:u().func,children:u().node.isRequired}},6571:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>C});var t=r(7294),a=r(6970);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var o=function(e){var n,r,a=(n=(0,t.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(e){a=!0,i=e}finally{try{t||null==u.return||u.return()}finally{if(a)throw i}}return r}}(n,r)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],u=a[1];return{value:o,onChange:function(e){return u(e.target.value)}}},u=r(9163);function l(){var e=f(["\n  font-size: 14px;\n  color: red;\n"]);return l=function(){return e},e}function c(){var e=f(["\n  font-size: 16px;\n  font-weight: 500;\n  padding: 8px 0;\n"]);return c=function(){return e},e}function s(){var e=f(["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  padding: 8px 4px;\n  display: block;\n  width: 100%;\n  &[disabled] {\n    opacity: 0.3;\n  }\n"]);return s=function(){return e},e}function d(){var e=f(["\n  padding: 16px 0;\n"]);return d=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=u.ZP.form(d()),m=u.ZP.input(s()),b=u.ZP.h2(c()),v=u.ZP.span(l()),g=r(2608);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var y=function(e){var n=e.error,r=e.disabled,a=e.onSubmit,i=e.title,u=o(""),l=o("");return t.createElement(t.Fragment,null,t.createElement(p,{disabled:r,onSubmit:function(e){e.preventDefault(),a({email:u.value,password:l.value})}},t.createElement(b,null,i),t.createElement(m,h({disabled:r,placeholder:"Email"},u)),t.createElement(m,h({disabled:r,placeholder:"Password",type:"password"},l)),t.createElement(g.M,{disabled:r},i)),n&&t.createElement(v,null,n))},w=r(6423),E=r(4119),j=r.n(E);function O(){var e,n,r=(e=["\n  mutation signup($input: UserCredentials!) {\n    signup(input: $input)\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return O=function(){return r},r}var x=j()(O()),S=function(e){var n=e.children;return t.createElement(w.mm,{mutation:x},n)};function P(){var e,n,r=(e=["\n  mutation login($input: UserCredentials!) {\n    login(input: $input)\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return P=function(){return r},r}var k=j()(P()),z=function(e){var n=e.children;return t.createElement(w.mm,{mutation:k},n)};const C=function(){var e=(0,t.useContext)(a._).activateAuth;return t.createElement(t.Fragment,null,t.createElement(S,null,(function(n,r){r.data;var a=r.loading,i=r.error,o=i&&i.graphQLErrors[0].message;return t.createElement(y,{disabled:a,error:o,title:"Registrarse",onSubmit:function(r){var t=r.email,a=r.password;n({variables:{input:{email:t,password:a}}}).then((function(n){var r=n.data.signup;e(r)})).catch((function(e){console.error(e.graphQLErrors[0].message)}))}})})),t.createElement(z,null,(function(n,r){r.data;var a=r.loading,i=r.error,o=i&&i.graphQLErrors[0].message;return t.createElement(y,{disabled:a,error:o,title:"Iniciar Sesion",onSubmit:function(r){var t=r.email,a=r.password;n({variables:{input:{email:t,password:a}}}).then((function(n){var r=n.data.login;e(r)})).catch((function(e){console.error(e.graphQLErrors[0].message)}))}})})))}}}]);
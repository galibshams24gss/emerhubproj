(function(t){function e(e){for(var s,n,i=e[0],l=e[1],d=e[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"9c0c":function(t,e,a){},c898:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(a("5c0b"),a("2877")),i={},l=Object(n["a"])(i,o,r,!1,null,null,null),d=l.exports,c=(a("c898"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Userdata")],1)},m=[],p=a("d4ec"),f=a("262e"),b=a("2caf"),v=a("9ab4"),h=a("60a3"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"flex mb-4"},[a("div",{staticClass:"w-1/2 h-100"},[a("div",{staticClass:"px-6 py-4"},[a("div",{staticClass:"font-bold text-xl mb-2"},[t._v("User Data")]),"synced"===t.state?a("div",{staticClass:"text-green-700 text-base"},[t._v(" User Data is synced with Firestore ")]):"changed"===t.state?a("div",{staticClass:"text-yellow-700 text-base"},[t._v(" There is change in data, it will sync with Firestore ")]):"error"===t.state?a("div",{staticClass:"text-red-700 text-base"},[t._v(" Sorry, there is an error while storing data in Firestore ")]):"loading"===t.state?a("div",{staticClass:"text-blue-700 text-base"},[t._v(" Data Loading... ")]):t._e()]),!0===t.submitted?a("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto",attrs:{id:"dialog"}},[a("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[t._m(0),a("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen"}),t._v("​ "),a("div",{staticClass:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[a("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[a("div",{staticClass:"sm:flex sm:items-start"},[a("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"}),a("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[a("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900",attrs:{id:"modal-headline"}},[t._v(" Data Completion Percentage ")]),a("div",{staticClass:"mt-2"},[a("p",{staticClass:"text-sm leading-5 text-gray-500"},[t._v(" You have completed this much percentage ")]),a("p",{staticClass:"text-center text-lg leading-6 font-medium text-blue-700"},[t._v(" "+t._s(t.calcpoints)+"% ")])])])])]),a("div",{staticClass:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[a("span",{staticClass:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[a("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5",attrs:{type:"button"},on:{click:t.close}},[t._v(" Close ")])])])])])]):t._e(),a("form",{ref:"form",staticClass:"bg-white px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.saveUser(e)},input:t.dataUpdate}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"user_id"}},[t._v(" User ID ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.user_id,expression:"formdata.user_id"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"User ID",required:""},domProps:{value:t.formdata.user_id},on:{input:function(e){e.target.composing||t.$set(t.formdata,"user_id",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[t._v(" Full Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"name",type:"text",placeholder:"Full Name",required:""},domProps:{value:t.formdata.name},on:{input:function(e){e.target.composing||t.$set(t.formdata,"name",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v(" Email Address ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.email,expression:"formdata.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",type:"email",placeholder:"Email Address"},domProps:{value:t.formdata.email},on:{input:function(e){e.target.composing||t.$set(t.formdata,"email",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"dept"}},[t._v(" Department ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.dept,expression:"formdata.dept"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"department",type:"text",placeholder:"Department"},domProps:{value:t.formdata.dept},on:{input:function(e){e.target.composing||t.$set(t.formdata,"dept",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"position"}},[t._v(" Position ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.position,expression:"formdata.position"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"position",type:"text",placeholder:"Position"},domProps:{value:t.formdata.position},on:{input:function(e){e.target.composing||t.$set(t.formdata,"position",e.target.value)}}})]),a("div",{staticClass:"flex items-center justify-between"},[a("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"submit"}},[t._v(" Save ")]),a("button",{staticClass:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"submit"},on:{click:t.backToOriginal}},[t._v(" Revert ")])]),t._m(1)])]),a("div",{staticClass:"w-1/2 h-screen"},[t._m(2),a("form",{ref:"form",staticClass:"bg-white px-8 pt-6 pb-8 mb-4"},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"user_id"}},[t._v(" User ID ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storeData.user_id,expression:"storeData.user_id"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"User ID",required:""},domProps:{value:t.storeData.user_id},on:{input:function(e){e.target.composing||t.$set(t.storeData,"user_id",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[t._v(" Full Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storeData.name,expression:"storeData.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"name",type:"text",placeholder:"Full Name",required:""},domProps:{value:t.storeData.name},on:{input:function(e){e.target.composing||t.$set(t.storeData,"name",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v(" Email Address ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storeData.email,expression:"storeData.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",type:"email",placeholder:"Email Address"},domProps:{value:t.storeData.email},on:{input:function(e){e.target.composing||t.$set(t.storeData,"email",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"dept"}},[t._v(" Department ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storeData.dept,expression:"storeData.dept"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"department",type:"text",placeholder:"Department"},domProps:{value:t.storeData.dept},on:{input:function(e){e.target.composing||t.$set(t.storeData,"dept",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"position"}},[t._v(" Position ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storeData.position,expression:"storeData.position"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"position",type:"text",placeholder:"Position"},domProps:{value:t.storeData.position},on:{input:function(e){e.target.composing||t.$set(t.storeData,"position",e.target.value)}}})])])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed inset-0 transition-opacity"},[a("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-center"},[a("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"/"}},[t._v(" Cancel ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-6 py-4"},[a("div",{staticClass:"font-bold text-xl mb-2"},[t._v("Store Data")]),a("div",{staticClass:"text-green-700 text-base"},[t._v(" Firestore data is displayed here ")])])}],y=(a("4160"),a("b0c0"),a("07ac"),a("159b"),a("5530")),w=(a("96cf"),a("1da1")),C=a("bee2"),_=a("59ca"),D=a.n(_),j=(a("e71f"),a("0ff2"));s["a"].use(j["a"]);var k={apiKey:"AIzaSyDXRB3n2GBkqOesS7ErD7l4Jbwecd-qtKw",authDomain:"emerhubtest-1d0a6.firebaseapp.com",databaseURL:"https://emerhubtest-1d0a6.firebaseio.com",projectId:"emerhubtest-1d0a6",storageBucket:"emerhubtest-1d0a6.appspot.com",messagingSenderId:"523563809943",appId:"1:523563809943:web:012470097919907ff8bdd2"},O=D.a.initializeApp(k),P=O.firestore(),$=a("b012"),E="users/userdata",U=function(t){Object(f["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.user_id="",t.name="",t.email="",t.dept="",t.position="",t.formdata={},t.state="loading",t.errorMsg="Error",t.points=20,t.storeData={},t.submitted=!1,t.calcpoints=0,t.firebaseData=null,t.debouncedChange=Object($["debounce"])(t.saveUser,1e3),t}return Object(C["a"])(a,[{key:"firestore",value:function(){return{firebaseData:P.doc(E)}}},{key:"saveUser",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.doc(E).set(this.formdata).then((function(t){e.state="synced",e.storeData=e.formdata,e.submitted=!0;var a=e.formdata,s=[];Object.values(a).forEach((function(t){""!=t&&s.push(t)}));var o=s.length,r=o*e.points;e.calcpoints=r})).catch((function(t){console.error("Error adding details: ",t),e.state="error"}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"prevData",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,a,s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=P.doc(E),t.next=3,e.get();case 3:a=t.sent.data(),a||(a={user_id:"",name:"",email:"",dept:"",position:""},e.set(a)),this.formdata=a,this.storeData=Object(y["a"])({},a),this.state="synced",s=this.formdata,o=[],Object.values(s).forEach((function(t){""!=t&&o.push(t)})),r=o.length,r*this.points;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"dataUpdate",value:function(){this.state="changed",this.debouncedChange}},{key:"debounce",value:function(t,e){var a=1e3;return function(){for(var s=this,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];this.saveUser,clearTimeout(a),a=window.setTimeout((function(){return t.apply(s,r)}),e)}}},{key:"backToOriginal",value:function(){this.state="revoked",this.formdata=Object(y["a"])({},this.storeData)}},{key:"close",value:function(){this.submitted=!1,this.state="synced"}},{key:"created",value:function(){this.prevData()}}]),a}(h["b"]);U=Object(v["__decorate"])([h["a"]],U);var N=U,S=N,F=Object(n["a"])(S,g,x,!1,null,"c2c84cc4",null),I=F.exports,T=function(t){Object(f["a"])(a,t);var e=Object(b["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(h["b"]);T=Object(v["__decorate"])([Object(h["a"])({components:{Userdata:I}})],T);var A=T,R=A,q=Object(n["a"])(R,u,m,!1,null,null,null),M=q.exports;s["a"].use(c["a"]);var z=[{path:"/",name:"Home",component:M}],B=new c["a"]({mode:"history",base:"/",routes:z}),J=B,K=a("2f62");s["a"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:J,store:L,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.ec26e14f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{261:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={methods:{showAlert:function(e,title){this.$swal({icon:e,title:title,showCloseButton:!0})}}}},262:function(e,t,r){"use strict";r.r(t);r(64),r(65),r(154);var n={name:"UiTextInput",props:{vid:{type:String,default:void 0},name:{type:String,default:""},maxLength:{type:Number,default:void 0},label:{type:String,default:""},rules:{type:[Object,String],default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},type:{type:String,default:"text",validator:function(e){return["url","text","password","tel","search","number","email"].includes(e)}},value:{type:null,default:""}},data:function(){return{innerValue:""}},computed:{hasValue:function(){return!!this.innerValue}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){e!==this.innerValue&&(this.innerValue=e)}},created:function(){this.value&&(this.innerValue=this.value)}},l=r(3),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("validation-provider",{attrs:{vid:e.vid,rules:e.rules,name:e.name||e.label,disabled:e.disabled,tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,l=(t.required,t.ariaInput),o=t.ariaMsg;return[r("label",{staticClass:"label",attrs:{for:e.name},on:{click:function(t){return e.$refs.input.focus()}}},[r("span",[e._v(e._s(e.label))])]),e._v(" "),"checkbox"===e.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],ref:"input",staticClass:"input mb-1",class:{"border-red-600":n[0],"has-value":e.hasValue},attrs:{id:e.name,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxLength,type:"checkbox"},domProps:{checked:Array.isArray(e.innerValue)?e._i(e.innerValue,null)>-1:e.innerValue},on:{keyup:function(t){return e.$emit("keyup")},blur:function(t){return e.$emit("blur")},keypress:function(t){return e.$emit("keypress")},change:function(t){var r=e.innerValue,n=t.target,l=!!n.checked;if(Array.isArray(r)){var o=e._i(r,null);n.checked?o<0&&(e.innerValue=r.concat([null])):o>-1&&(e.innerValue=r.slice(0,o).concat(r.slice(o+1)))}else e.innerValue=l}}},"input",l,!1)):"radio"===e.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],ref:"input",staticClass:"input mb-1",class:{"border-red-600":n[0],"has-value":e.hasValue},attrs:{id:e.name,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxLength,type:"radio"},domProps:{checked:e._q(e.innerValue,null)},on:{keyup:function(t){return e.$emit("keyup")},blur:function(t){return e.$emit("blur")},keypress:function(t){return e.$emit("keypress")},change:function(t){e.innerValue=null}}},"input",l,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],ref:"input",staticClass:"input mb-1",class:{"border-red-600":n[0],"has-value":e.hasValue},attrs:{id:e.name,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxLength,type:e.type},domProps:{value:e.innerValue},on:{keyup:function(t){return e.$emit("keyup")},blur:function(t){return e.$emit("blur")},keypress:function(t){return e.$emit("keypress")},input:function(t){t.target.composing||(e.innerValue=t.target.value)}}},"input",l,!1)),e._v(" "),n[0]?r("span",e._b({staticClass:"error"},"span",o,!1),[e._v(e._s(n[0]))]):e._e()]}}])})}),[],!1,null,null,null);t.default=component.exports},276:function(e,t,r){"use strict";r.r(t);var n={name:"UiAlert",props:{message:{type:[String,Array],default:""},type:{type:String,default:""}},methods:{closeAlert:function(){this.$emit("close")}}},l=r(3),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.message?r("div",{staticClass:"w-full py-4 px-5 shadow rounded flex items-center justify-between",class:["error"===e.type?"bg-red-200":"bg-green-100"],attrs:{role:"alert"}},[Array.isArray(e.message)?r("ul",e._l(e.message,(function(t,n){return r("li",{key:n,staticClass:"block text-sm font-semibold",class:["error"===e.type?"text-red-700":"text-green-700"]},[e._v("\n      "+e._s(t)+"\n    ")])})),0):r("span",{staticClass:"block text-sm font-semibold",class:["error"===e.type?"text-red-700":"text-green-700"]},[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),r("span",{staticClass:"ml-3",on:{click:e.closeAlert}},[r("svg",{staticClass:"fill-current h-6 w-6",class:["error"===e.type?"text-red-500":"text-green-500"],attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[e._v("Close")]),e._v(" "),r("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},299:function(e,t,r){"use strict";r.r(t);r(66),r(20);var n=r(2),l={mixins:[r(261).a],props:{refferal:{type:String,default:""}},data:function(){return{fullname:"",email:"",phone:"",password:"",confirmPassword:"",alertMessage:"",alertType:"",loading:!1,passwordVisibility:!1,inputType:"password"}},methods:{togglePasswordVisibility:function(){"password"===this.$refs.password.type?(this.passwordVisibility=!0,this.$refs.password.type="text",this.inputType="text"):(this.passwordVisibility=!1,this.$refs.password.type="password",this.inputType="password")},onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$axios.$post("/register",{email:e.email,firstname:e.fullname,mobile_number:e.phone,password:e.password,password_confirmation:e.confirmPassword,ref:e.refferal});case 4:if(r=t.sent,e.loading=!1,-2!==r.status){t.next=11;break}e.alertMessage=r.msg.split("."),e.alertType="error",t.next=15;break;case 11:if(1!==r.status){t.next=15;break}return t.next=14,e.$auth.loginWith("local",{data:{email:e.email,password:e.password}});case 14:e.$auth.fetchUser();case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),e.loading=!1,e.showAlert("error","Error creating account");case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},closeAlert:function(){this.alertMessage=""}}},o=r(3),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("validation-observer",{ref:"observer",attrs:{slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.passes;return[r("form",{staticClass:"card overflow-hidden px-8 py-6 mb-2",on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("ui-alert",{staticClass:"mb-4",attrs:{message:e.alertMessage,type:e.alertType},on:{close:e.closeAlert}}),e._v(" "),r("div",{staticClass:"flex flex-wrap sm:-mx-2"},[r("ui-text-input",{staticClass:"w-full sm:w-1/2 sm:px-2 mb-2",attrs:{rules:"required",label:"Fullname",name:"fullname",type:"text"},model:{value:e.fullname,callback:function(t){e.fullname=t},expression:"fullname"}}),e._v(" "),r("ui-text-input",{staticClass:"w-full sm:w-1/2 sm:px-2 mb-2",attrs:{rules:"required",label:"Email",name:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("ui-text-input",{staticClass:"w-full sm:w-1/2 sm:px-2 mb-2",attrs:{rules:"required|phone",label:"Phone No",name:"phone",type:"text"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),r("validation-provider",{staticClass:"w-full sm:w-1/2 sm:px-2 mb-2",attrs:{rules:"required|min:6",tag:"div",vid:"confirm",name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("label",{staticClass:"label"},[e._v("Password")]),e._v(" "),r("div",{staticClass:"relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",staticClass:"input",class:{"border-red-600":n[0]},attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("div",[r("i",{staticClass:"text-gray-700 cursor-pointer absolute top-20 right-7 z-50",class:[e.password?"block":"hidden",e.passwordVisibility?"fas fa-eye-slash":"far fa-eye"],on:{click:e.togglePasswordVisibility}})])]),e._v(" "),n[0]?r("span",{staticClass:"error mt-1"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)}),e._v(" "),r("ui-text-input",{staticClass:"w-full sm:w-1/2 sm:px-2 mb-2",attrs:{type:e.inputType,rules:"required|confirmed:confirm",label:"Confirm Password",name:"confirm password"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),e._v(" "),r("ui-button",{staticClass:"mt-5",attrs:{primary:"",disabled:e.loading,loading:e.loading,type:"submit",rounded:"",raised:"",full:""}},[e._v("\n      "+e._s(e.loading?"Loading":"Create Account")+"\n    ")])],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiAlert:r(276).default,UiTextInput:r(262).default,UiButton:r(155).default})},382:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{refferal:""}},mounted:function(){this.refferal=this.$route.query.ref},layout:"secondary",middleware:["guest"],head:function(){return{title:"80Kobosms - Create Account"}}},l=r(3),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bg py-8 min-h-screen flex justify-center items-center"},[t("div",{staticClass:"container max-w-xl mx-auto"},[t("nuxt-link",{attrs:{to:"/"}},[t("app-logo",{staticClass:"block mx-auto h-12"})],1),this._v(" "),t("h1",{staticClass:"font-bold text-white text-center mt-4"},[this._v("\n      Create An Account, It's Free\n    ")]),this._v(" "),t("create-account",{staticClass:"mt-4",attrs:{refferal:this.refferal}}),this._v(" "),t("p",{staticClass:"text-white text-center mt-3"},[this._v("\n      Already have an account?\n      "),t("nuxt-link",{staticClass:"text-secondary font-semibold",attrs:{to:"/login"}},[this._v("\n        Login!\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppLogo:r(158).default,CreateAccount:r(299).default})}}]);
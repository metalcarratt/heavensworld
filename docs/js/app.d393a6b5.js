(function(e){function t(t){for(var o,i,r=t[0],l=t[1],c=t[2],p=0,f=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("router-view")],1)},s=[],i={name:"App"},r=i,l=(n("5c0b"),n("2877")),c=Object(l["a"])(r,a,s,!1,null,null,null),u=c.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page blue"},[n("heading"),n("message",[e._v("Twenty years on a mountain, isolated from the world. Seeking inspiration from nature and contemplating the mysteries of the universe. After all this time, you have finally grapsed an intial understanding of...")]),n("choices",e._l(e.inspirations,(function(t,o){return n("choice",{key:o,attrs:{name:t.name,blurb:t.blurb},on:{click:function(n){return e.chooseInspiration(t.name)}}})})),1)],1)},m=[],h=n("2f62");o["a"].use(h["a"]);var d=new h["a"].Store({state:{inspiration:"",disciples:[],fame:5}}),b={fame:function(){return d.state.fame},disciples:function(){return d.state.disciples},setInspiration:function(e){d.state.inspiration=e},fameUp:function(e){d.state.fame=d.state.fame+e},addDisciple:function(e){d.state.disciples.push(e)}},v={data:function(){return{inspirations:[{name:"Harmony",blurb:"Achieving balance between all things"},{name:"Righteousness",blurb:"Seeking a life of absolute integrity"},{name:"Integrity",blurb:""},{name:"Passion",blurb:"Life burns like a flame, fierce and fast"}]}},methods:{chooseInspiration:function(e){b.setInspiration(e),this.$router.push("/follower")}}},_=v,g=Object(l["a"])(_,f,m,!1,null,null,null),y=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page yellow"},[n("heading"),n("message",[e._v("Your teaching inspires many. After listening with rapt attention, one young student asks to become your personal disciple. ")]),n("message",[e._v('"Master, my name is '+e._s(e.follower.name)+'. Please accept me as your disciple!"')]),e.accepted?e._e():n("button",{on:{click:e.accept}},[e._v("Accept")]),e.accepted?[n("h2",[e._v("Assign a job")]),n("message",[e._v("Disciples can be assigned special tasks. Choose what you want your disciple to focus on.")]),n("choices",e._l(e.jobs,(function(t,o){return n("choice",{key:o,attrs:{name:t.name,blurb:t.blurb},on:{click:function(n){return e.chooseJob(t)}}})})),1)]:e._e()],2)},j=[],k=(n("b0c0"),["Yi Yusheng","Peng Renshu","Dai Shaoqing","Deng Xing","Ren Jianyu"]),O=["Sun Hualing","Liu Xia","Zou Lanfen","Jin Luli","Hao Suyin"],M={newDisciple:function(){var e,t=Math.floor(2*Math.random()),n=0===t?"Male":"Female",o=Math.floor(5*Math.random());e="Male"===n?k[o]:O[o];var a=Math.floor(9*Math.random())+1,s=("Male"===n?"male":"female")+"-"+a+".PNG";return{name:e,gender:n,image:s,job:""}}},x={data:function(){return{accepted:!1,jobs:[{name:"Herbalist",blurb:"Studies nature to concoct elixers"},{name:"Miner",blurb:"Hunts for spirit stones"},{name:"Warrior",blurb:"Trains in martial arts"},{name:"Scholar",blurb:"Contemplates the universe to unlock its secrets"}],follower:{}}},mounted:function(){this.follower=M.newDisciple()},methods:{accept:function(){this.accepted=!0},chooseJob:function(e){this.follower.job=e.name,b.addDisciple(this.follower),this.$router.push("/mountain")}}},C=x,$=Object(l["a"])(C,w,j,!1,null,null,null),S=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page brown"},[n("heading"),n("message",[e._v("From a sea of clouds rises a mountain paradise")]),n("message",[e._v("Fame: "),n("strong",[e._v(e._s(e.fame))])]),n("h2",[e._v("Disciples:")]),n("span",{staticClass:"disciples"},e._l(e.disciples,(function(e,t){return n("DiscipleProfile",{key:t,attrs:{disciple:e}})})),1),n("button",{on:{click:e.promote}},[e._v("Promote teachings")]),n("button",[e._v("Cultivate")]),n("button",[e._v("Seek Enlightenment")]),n("button",[e._v("Develop techniques")]),n("button",[e._v("Travel")])],1)},E=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("img",{attrs:{src:e.disciple.image}}),n("label",[e._v(e._s(e.disciple.name))]),n("span",[e._v(e._s(e.disciple.job))])])},T=[],A={props:["disciple"]},H=A,J=Object(l["a"])(H,D,T,!1,null,null,null),L=J.exports,U={components:{DiscipleProfile:L},computed:{fame:function(){return b.fame()},disciples:function(){return b.disciples()}},methods:{promote:function(){this.$router.push("/promote")}}},I=U,F=Object(l["a"])(I,P,E,!1,null,null,null),Y=F.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page yellow"},[n("heading"),n("message",[e._v("You step out into the world, ready to impart wisdom to the ignorant. Where will you go?")]),e.chosen?e._e():n("choices",[n("choice",{attrs:{name:"Liyue",blurb:"Town of about 5,000 people"},on:{click:function(t){return e.choose("Liyue")}}})],1),e.chosen?[n("h2",[e._v("Success!")]),n("message",[e._v("The people of "+e._s(e.choice)+" listen rapt to your message.")]),n("message",[e._v("Fame: "),n("strong",[e._v("+"+e._s(e.fameUp))]),e._v(" >> "+e._s(e.fame))]),n("button",{on:{click:e.goBack}},[e._v("Continue")])]:e._e()],2)},q=[],B={data:function(){return{destination:"",fameUp:0}},computed:{chosen:function(){return""!==this.destination},fame:function(){return b.fame()}},methods:{choose:function(e){this.destination=e,this.fameUp+=Math.floor(3*Math.random())+2,b.fameUp(this.fameUp)},goBack:function(){var e=Math.floor(20*Math.random());e<b.fame()?this.$router.push("/follower"):this.$router.push("/mountain")}}},W=B,X=Object(l["a"])(W,R,q,!1,null,null,null),G=X.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("span",{staticClass:"clouds"},[n("span",{staticClass:"cloud1"}),n("span",{staticClass:"cloud2"}),n("span",{staticClass:"cloud3"})]),e._v(" Heavensworld ")])}],z={},K=Object(l["a"])(z,N,Z,!1,null,null,null),Q=K.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"message-box"},[e._t("default")],2)},ee=[],te={},ne=Object(l["a"])(te,V,ee,!1,null,null,null),oe=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"choice"},[e._t("default")],2)},se=[],ie={},re=Object(l["a"])(ie,ae,se,!1,null,null,null),le=re.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"button",on:{click:function(t){return e.$emit("click")}}},[n("label",[e._v(e._s(e.name))]),n("span",[e._v(e._s(e.blurb))])])},ue=[],pe={props:["name","blurb"]},fe=pe,me=Object(l["a"])(fe,ce,ue,!1,null,null,null),he=me.exports;o["a"].use(p["a"]);var de=[{path:"/",component:y},{path:"/follower",component:S},{path:"/mountain",component:Y},{path:"/promote",component:G}],be=new p["a"]({routes:de});o["a"].config.productionTip=!1,o["a"].component("heading",Q),o["a"].component("message",oe),o["a"].component("choices",le),o["a"].component("choice",he),new o["a"]({render:function(e){return e(u)},router:be}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.d393a6b5.js.map
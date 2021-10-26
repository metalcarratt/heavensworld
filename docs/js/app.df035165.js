(function(e){function t(t){for(var s,o,l=t[0],r=t[1],c=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,l=1;l<n.length;l++){var r=n[l];0!==i[r]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n(e.page,{tag:"component",on:{changePage:e.changePage}})],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page blue"},[n("heading"),n("message",[e._v("Twenty years on a mountain, isolated from the world. Seeking inspiration from nature and contemplating the mysteries of the universe. After all this time, you have finally grapsed an intial understanding of...")]),n("choices",e._l(e.inspirations,(function(t,s){return n("choice",{key:s,attrs:{name:t.name,blurb:t.blurb},on:{click:function(n){return e.chooseInspiration(t.name)}}})})),1)],1)},l=[],r=n("2f62");s["a"].use(r["a"]);var c=new r["a"].Store({state:{inspiration:"",disciples:[],fame:5,resources:{stones:0}}}),u={fame:function(){return c.state.fame},disciples:function(){return c.state.disciples},stones:function(){return c.state.resources.stones},setInspiration:function(e){c.state.inspiration=e},fameUp:function(e){c.state.fame=c.state.fame+e},addDisciple:function(e){c.state.disciples.push(e)},addStones:function(e){c.state.resources.stones=c.state.resources.stones+e}},p={data:function(){return{inspirations:[{name:"Harmony",blurb:"Achieving balance between all things"},{name:"Righteousness",blurb:"Seeking a life of absolute integrity"},{name:"Integrity",blurb:""},{name:"Passion",blurb:"Life burns like a flame, fierce and fast"}]}},methods:{chooseInspiration:function(e){u.setInspiration(e),this.$emit("changePage","NewFollower")}}},f=p,h=n("2877"),d=Object(h["a"])(f,o,l,!1,null,null,null),m=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page yellow"},[n("heading"),n("message",[e._v("Your teaching inspires many. After listening with rapt attention, one young student asks to become your personal disciple. ")]),n("span",{staticClass:"disciples"},[n("DiscipleProfile",{attrs:{disciple:e.follower,hideJob:!0}})],1),n("message",[e._v('"Master, my name is '+e._s(e.follower.name)+'. Please accept me as your disciple!"')]),e.accepted?e._e():n("button",{on:{click:e.accept}},[e._v("Accept")]),e.accepted?[n("h2",[e._v("Assign a job")]),n("message",[e._v("Disciples can be assigned special tasks. Choose what you want your disciple to focus on.")]),n("choices",e._l(e.jobs,(function(t,s){return n("choice",{key:s,attrs:{name:t.name,blurb:t.blurb},on:{click:function(n){return e.chooseJob(t)}}})})),1)]:e._e()],2)},g=[],_=(n("b0c0"),["Yi Yusheng","Peng Renshu","Dai Shaoqing","Deng Xing","Ren Jianyu"]),b=["Sun Hualing","Liu Xia","Zou Lanfen","Jin Luli","Hao Suyin"],w={newDisciple:function(){var e,t=Math.floor(2*Math.random()),n=0===t?"Male":"Female",s=Math.floor(5*Math.random());e="Male"===n?_[s]:b[s];var i=Math.floor(9*Math.random())+1,a=("Male"===n?"male":"female")+"-"+i+".PNG";return{name:e,gender:n,image:a,job:"",mining:{}}}},y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["profile",e.hoverable?"hoverable":""]},[n("img",{attrs:{src:"images/"+e.disciple.image}}),n("label",[e._v(e._s(e.disciple.name))]),e.hideJob?e._e():n("span",[e._v(e._s(e.disciple.job))]),n("span",{staticClass:"role"},[e._v(e._s(e.role))])])},S=[],M={props:["disciple","hoverable","hideJob","role"]},k=M,P=Object(h["a"])(k,y,S,!1,null,null,null),C=P.exports,O={components:{DiscipleProfile:C},data:function(){return{accepted:!1,jobs:[{name:"Herbalist",blurb:"Studies nature to concoct elixers"},{name:"Miner",blurb:"Hunts for spirit stones"},{name:"Warrior",blurb:"Trains in martial arts"},{name:"Scholar",blurb:"Contemplates the universe to unlock its secrets"}],follower:{}}},mounted:function(){this.follower=w.newDisciple()},methods:{accept:function(){this.accepted=!0},chooseJob:function(e){this.follower.job=e.name,u.addDisciple(this.follower),this.$emit("changePage","Mountain")}}},E=O,x=Object(h["a"])(E,v,g,!1,null,null,null),T=x.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page green"},[n("heading"),e._l(e.map,(function(t,s){return n("span",{key:s,staticClass:"row"},e._l(t,(function(t,i){return n("span",{key:i,class:["cell",t],on:{click:function(t){return e.select(s,i)}}},[1===e.stones[s][i]?n("span",{staticClass:"sstone"},[e._v("S")]):e._e(),1===e.plants[s][i]?n("span",{staticClass:"plants"},[e._v("P")]):e._e(),1===e.soil[s][i]?n("span",{staticClass:"soil"},[e._v("s")]):e._e(),""!==e.places[s][i]?n("span",{staticClass:"placename"},[e._v(e._s(e.places[s][i]))]):e._e(),null!=e.activity[s][i]?n("span",{staticClass:"worker"},[n("img",{attrs:{src:"images/"+e.activity[s][i].disciple.image}})]):e._e()])})),0)})),n("CellDetails",{attrs:{selected:e.selected},on:{showStonesModal:e.showStonesModal,showPlantsModal:e.showPlantsModal,showHerbsModal:e.showHerbsModal}}),n("button",{on:{click:function(t){return e.$emit("changePage","Mountain")}}},[e._v("Mountain")]),e.isShowingModal?n("modal",[e.isShowingStonesModal?n("h3",[e._v("Send who to mine stones?")]):e.isShowingPlantsModal?n("h3",[e._v("Send who to gather plants?")]):e.isShowingHerbsModal?n("h3",[e._v("Send who to plant herbs?")]):e._e(),e._l(e.disciples,(function(t,s){return n("DiscipleProfile",{key:s,attrs:{disciple:t,hoverable:!0},nativeOn:{click:function(n){return e.sendWorker(t)}}})})),n("button",{on:{click:function(t){e.showModal=""}}},[e._v("Cancel")])],2):e._e()],2)},j=[],A=(n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"details"},[n("span",{staticClass:"detail"},[n("label",[e._v(e._s(e.getLabel)+" ")]),e.hasStones?[n("span",{staticClass:"special"},[e._v("contains spirit stones")]),e.hasWorker?e._e():n("button",{on:{click:e.mineStones}},[e._v("Mine stones")])]:e._e(),e.hasPlants?[n("span",{staticClass:"special"},[e._v("discovered spirit plants")]),e.hasWorker?e._e():n("button",{on:{click:e.gatherPlants}},[e._v("Gather")])]:e._e(),e.hasSoil?[n("span",{staticClass:"special"},[e._v("has rich soil")]),n("button",{on:{click:e.plantHerbs}},[e._v("Plant herbs")])]:e._e(),e.isMortalTerritory?n("span",{staticClass:"warning"},[e._v("Mortal territory")]):e._e()],2),e.hasWorker?n("span",{staticClass:"worker"},[n("DiscipleProfile",{attrs:{disciple:e.getWorker,hideJob:!0,role:"mining"}}),n("button",{on:{click:e.removeWorker}},[e._v("Remove")])],1):e._e()])}),$=[],D=[["forest","hill","hill","hill","forest"],["forest","hill","mountain","hill","forest"],["lake","forest","hill","forest","grass"],["forest","grass","forest","grass","farm"],["farm","farm","city","farm","farm"]],H=[[0,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],W=[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0],[0,1,0,0,0],[0,0,0,0,0]],R=[[0,0,0,0,0],[0,0,0,1,0],[0,1,0,1,0],[0,0,0,0,0],[0,0,0,0,0]],N=[["","","","",""],["","","Hall","",""],["","","","",""],["","","","",""],["","","Liyue","",""]],L=[[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]],F={initialMap:D,initialStones:H,initialPlants:W,initialSoil:R,initialPlaces:N,initialActivity:L};s["a"].use(r["a"]);var J=new r["a"].Store({state:{map:F.initialMap,stones:F.initialStones,plants:F.initialPlants,soil:F.initialSoil,places:F.initialPlaces,activity:F.initialActivity}}),U={map:function(){return J.state.map},stones:function(){return J.state.stones},plants:function(){return J.state.plants},soil:function(){return J.state.soil},places:function(){return J.state.places},activity:function(){return J.state.activity},setActivityAt:function(e,t,n,i){s["a"].set(J.state.activity[e],t,{activity:i,disciple:n})},removeActivityAt:function(e,t){s["a"].set(J.state.activity[e],t,null)}},B={startActivity:function(e,t,n,s){n.activity&&this.removeWorkerAt(n.activity.row,n.activity.cell),n.activity={row:e,cell:t,activity:s},U.setActivityAt(e,t,n,s)},hasWorker:function(e,t){return e&&null!=U.activity()[e][t]},getWorker:function(e,t){return U.activity()[e][t].disciple},removeWorkerAt:function(e,t){var n=U.activity()[e][t];U.removeActivityAt(e,t),n.disciple.activity=null}},Y={props:["selected"],components:{DiscipleProfile:C},computed:{getLabel:function(){return this.selected.type+(""!==this.selected.placename?" - "+this.selected.placename:"")},hasStones:function(){return 1===this.selected.stones},hasPlants:function(){return 1===this.selected.plants},hasSoil:function(){return 1===this.selected.soil},hasWorker:function(){return B.hasWorker(this.selected.rowIndex,this.selected.cellIndex)},getWorker:function(){return B.getWorker(this.selected.rowIndex,this.selected.cellIndex)},isMortalTerritory:function(){return"city"===this.selected.type||"farm"===this.selected.type}},methods:{mineStones:function(){this.$emit("showStonesModal")},gatherPlants:function(){this.$emit("showPlantsModal")},plantHerbs:function(){this.$emit("showHerbsModal")},removeWorker:function(){console.log("CellDetails#removeWorker"),B.removeWorkerAt(this.selected.rowIndex,this.selected.cellIndex)}}},q=Y,G=Object(h["a"])(q,A,$,!1,null,null,null),V=G.exports,X="stones",Z="plants",z="herbs",K={STONES:X,PLANTS:Z,HERBS:z},Q={components:{DiscipleProfile:C,CellDetails:V},data:function(){return{selected:{},showModal:""}},computed:{map:function(){return U.map()},stones:function(){return U.stones()},plants:function(){return U.plants()},soil:function(){return U.soil()},places:function(){return U.places()},activity:function(){return U.activity()},disciples:function(){return u.disciples()},isShowingStonesModal:function(){return this.showModal===K.STONES},isShowingPlantsModal:function(){return this.showModal===K.PLANTS},isShowingHerbsModal:function(){return this.showModal===K.HERBS},isShowingModal:function(){return""!==this.showModal}},mounted:function(){this.select(1,3)},methods:{showStonesModal:function(){this.showModal=K.STONES},showPlantsModal:function(){this.showModal=K.PLANTS},showHerbsModal:function(){this.showModal=K.HERBS},select:function(e,t){this.selected={type:this.map[e][t],stones:this.stones[e][t],plants:this.plants[e][t],soil:this.soil[e][t],placename:this.places[e][t],rowIndex:e,cellIndex:t}},sendWorker:function(e){B.startActivity(this.selected.rowIndex,this.selected.cellIndex,e,this.showModal),this.showModal=""}}},ee=Q,te=Object(h["a"])(ee,I,j,!1,null,null,null),ne=te.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page brown"},[n("heading"),n("message",[e._v("From a sea of clouds rises a mountain paradise")]),n("message",[e._v("Fame: "),n("strong",[e._v(e._s(e.fame))])]),n("message",[e._v("Stones: "),n("strong",[e._v(e._s(e.stones))])]),n("button",{on:{click:function(t){return e.$emit("changePage","Map")}}},[e._v("Map")]),n("h2",[e._v("Disciples:")]),n("span",{staticClass:"disciples"},e._l(e.disciples,(function(e,t){return n("DiscipleProfile",{key:t,attrs:{disciple:e}})})),1),n("button",{on:{click:e.promote}},[e._v("Promote teachings")]),n("button",[e._v("Cultivate")]),n("button",[e._v("Seek Enlightenment")]),n("button",[e._v("Develop techniques")]),n("button",[e._v("Travel")])],1)},ie=[];s["a"].use(r["a"]);var ae="recruit",oe="activities",le="finished",re=new r["a"].Store({state:{turnOver:!1,stage:le}}),ce={RECRUIT:ae,ACTIVITIES:oe,FINISHED:le,isTurnOver:function(){return re.state.turnOver},stage:function(){return re.state.stage},turnOver:function(){re.state.turnOver=!0,re.state.stage=ae},newTurn:function(){re.state.turnOver=!1},nextStage:function(){re.state.stage===ae?re.state.stage=oe:re.state.stage=le}},ue=(n("159b"),{processEndTurn:function(){var e=ce.stage();if(e===ce.RECRUIT){ce.nextStage();var t=this.recruitFollowers();return t?ce.RECRUIT:this.processEndTurn()}return e===ce.ACTIVITIES?(ce.nextStage(),this.performActivities(),this.processEndTurn()):ce.FINISHED},recruitFollowers:function(){var e=Math.floor(20*Math.random());return e<u.fame()},performActivities:function(){u.disciples().forEach((function(e){e.activity&&e.activity.activity===K.STONES&&u.addStones(1)}))}}),pe={components:{DiscipleProfile:C},computed:{fame:function(){return u.fame()},disciples:function(){return u.disciples()},stones:function(){return u.stones()}},mounted:function(){if(ce.isTurnOver()){var e=ue.processEndTurn();e===ce.RECRUIT?this.$emit("changePage","NewFollower"):ce.newTurn()}},methods:{promote:function(){ce.turnOver(),this.$emit("changePage","Promote")}}},fe=pe,he=Object(h["a"])(fe,se,ie,!1,null,null,null),de=he.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page yellow"},[n("heading"),n("message",[e._v("You step out into the world, ready to impart wisdom to the ignorant. Where will you go?")]),e.chosen?e._e():n("choices",[n("choice",{attrs:{name:"Liyue",blurb:"Town of about 5,000 people"},on:{click:function(t){return e.choose("Liyue")}}})],1),e.chosen?[n("h2",[e._v("Success!")]),n("message",[e._v("The people of "+e._s(e.destination)+" listen rapt to your message.")]),n("message",[e._v("Fame: "),n("strong",[e._v("+"+e._s(e.fameUp))]),e._v(" >> "+e._s(e.fame))]),n("button",{on:{click:e.goBack}},[e._v("Continue")])]:e._e()],2)},ve=[],ge={data:function(){return{destination:"",fameUp:0}},computed:{chosen:function(){return""!==this.destination},fame:function(){return u.fame()}},methods:{choose:function(e){this.destination=e,this.fameUp+=Math.floor(3*Math.random())+2,u.fameUp(this.fameUp)},goBack:function(){this.$emit("changePage","Mountain")}}},_e=ge,be=Object(h["a"])(_e,me,ve,!1,null,null,null),we=be.exports,ye="Inspiration",Se={name:"App",components:{Inspiration:m,NewFollower:T,Map:ne,Mountain:de,Promote:we},data:function(){return{page:ye}},methods:{changePage:function(e){this.page=e}}},Me=Se,ke=(n("5c0b"),Object(h["a"])(Me,i,a,!1,null,null,null)),Pe=ke.exports,Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Oe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("span",{staticClass:"clouds"},[n("span",{staticClass:"cloud1"}),n("span",{staticClass:"cloud2"}),n("span",{staticClass:"cloud3"})]),e._v(" Heavensworld ")])}],Ee={},xe=Object(h["a"])(Ee,Ce,Oe,!1,null,null,null),Te=xe.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"message-box"},[e._t("default")],2)},je=[],Ae={},$e=Object(h["a"])(Ae,Ie,je,!1,null,null,null),De=$e.exports,He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"choice"},[e._t("default")],2)},We=[],Re={},Ne=Object(h["a"])(Re,He,We,!1,null,null,null),Le=Ne.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"button",on:{click:function(t){return e.$emit("click")}}},[n("label",[e._v(e._s(e.name))]),n("span",[e._v(e._s(e.blurb))])])},Je=[],Ue={props:["name","blurb"]},Be=Ue,Ye=Object(h["a"])(Be,Fe,Je,!1,null,null,null),qe=Ye.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"matte"},[n("div",{staticClass:"modal"},[e._t("default")],2)])},Ve=[],Xe={},Ze=Object(h["a"])(Xe,Ge,Ve,!1,null,null,null),ze=Ze.exports;s["a"].config.productionTip=!1,s["a"].component("heading",Te),s["a"].component("message",De),s["a"].component("choices",Le),s["a"].component("choice",qe),s["a"].component("modal",ze),new s["a"]({render:function(e){return e(Pe)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.df035165.js.map
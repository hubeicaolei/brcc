(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0627ae0c"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var i,o,c=String(a(t)),s=n(r),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?e?c.charAt(s):i:e?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1af6":function(e,t,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),i=r("79e5"),o=r("be13"),c=r("2b4c"),s=r("520a"),u=c("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=c(e),p=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=p?!i((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[f](""),!t})):void 0;if(!p||!m||"replace"===e&&!l||"split"===e&&!d){var h=/./[f],v=r(o,f,""[e],(function(e,t,r,n,a){return t.exec===s?p&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),b=v[0],g=v[1];n(String.prototype,e,b),a(RegExp.prototype,f,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),i=r("ebd6"),o=r("0390"),c=r("9def"),s=r("5f1b"),u=r("520a"),l=r("79e5"),d=Math.min,f=[].push,p="split",m="length",h="lastIndex",v=4294967295,b=!l((function(){RegExp(v,"y")}));r("214f")("split",2,(function(e,t,r,l){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[m]||2!="ab"[p](/(?:ab)*/)[m]||4!="."[p](/(.?)(.?)/)[m]||"."[p](/()()/)[m]>1||""[p](/.?/)[m]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var i,o,c,s=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=void 0===t?v:t>>>0,b=new RegExp(e.source,l+"g");while(i=u.call(b,a)){if(o=b[h],o>d&&(s.push(a.slice(d,i.index)),i[m]>1&&i.index<a[m]&&f.apply(s,i.slice(1)),c=i[0][m],d=o,s[m]>=p))break;b[h]===i.index&&b[h]++}return d===a[m]?!c&&b.test("")||s.push(""):s.push(a.slice(d)),s[m]>p?s.slice(0,p):s}:"0"[p](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):g.call(String(a),r,n)},function(e,t){var n=l(g,e,this,t,g!==r);if(n.done)return n.value;var u=a(e),f=String(this),p=i(u,RegExp),m=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),x=new p(b?u:"^(?:"+u.source+")",h),y=void 0===t?v:t>>>0;if(0===y)return[];if(0===f.length)return null===s(x,f)?[f]:[];var w=0,j=0,I=[];while(j<f.length){x.lastIndex=b?j:0;var O,k=s(x,b?f:f.slice(j));if(null===k||(O=d(c(x.lastIndex+(b?0:j)),f.length))===w)j=o(f,j,m);else{if(I.push(f.slice(w,j)),I.length===y)return I;for(var A=1;A<=k.length-1;A++)if(I.push(k[A]),I.length===y)return I;j=w=O}}return I.push(f.slice(w)),I}]}))},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(e){var t,r,o,l,d=this;return u&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),s&&(t=d[c]),o=a.call(d,e),s&&o&&(d[c]=d.global?o.index+o[0].length:t),u&&o&&o.length>1&&i.call(o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"67bb":function(e,t,r){e.exports=r("f921")},"6d67":function(e,t,r){"use strict";var n=r("5ca1"),a=r("0a49")(1);n(n.P+n.F*!r("2f21")([].map,!0),"Array",{map:function(e){return a(this,e,arguments[1])}})},"75fc":function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("a745"),a=r.n(n);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){if(a()(e))return i(e)}var c=r("774e"),s=r.n(c),u=r("c8bb"),l=r.n(u),d=r("67bb"),f=r.n(d);function p(e){if("undefined"!==typeof f.a&&l()(Object(e)))return s()(e)}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?s()(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e){return o(e)||p(e)||m(e)||h()}},"774e":function(e,t,r){e.exports=r("d2d5")},a745:function(e,t,r){e.exports=r("f410")},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c8bb:function(e,t,r){e.exports=r("54a1")},d5c7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("section",{staticClass:"add-btn"},[r("a-breadcrumb",{staticClass:"title"},[r("a-breadcrumb-item",{staticClass:"font-menu"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/index")}}},[e._v("首页")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/productLine")}}},[e._v(e._s(e.productName)+"-产品线")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/listProject?productId="+e.productId+"&productName="+e.productName)}}},[e._v(e._s(e.projectName)+"-工程")])]),r("a-breadcrumb-item",[e._v("\n                权限管理 \n            ")])],1),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n            添加成员\n        ")])],1),r("a-divider",{staticClass:"divider"}),r("section",{staticClass:"content"},[r("a-table",{attrs:{columns:e.userColumns,bordered:"","data-source":e.tabledata,"row-key":function(e){return e.id},pagination:e.pagination,loading:e.loading},scopedSlots:e._u([{key:"operation",fn:function(t,n){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")])]}}])})],1),r("a-drawer",{attrs:{title:e.formModal.title,visible:e.formModal.show,width:"720","body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formData.id}],expression:"['id',{initialValue:formData.id}]"}]})],1),"add"===e.formModal.option?r("a-form-item",{attrs:{label:"用户名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"用户名称必填!"}],initialValue:e.formData.name}],expression:"['name',{rules: [{ required: true, message: '用户名称必填!'}], initialValue: formData.name}]"}],attrs:{placeholder:"请输入用户邮箱前缀"}})],1):e._e(),r("a-form-item",{attrs:{label:"角色"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isAdmin",{initialValue:e.formData.isAdmin}],expression:"['isAdmin', {initialValue: formData.isAdmin}]"}]},[r("a-radio",{attrs:{value:1}},[e._v("\n                        管理员\n                    ")]),r("a-radio",{attrs:{value:0}},[e._v("\n                        成员\n                    ")])],1)],1),0===e.form.getFieldValue("isAdmin")?r("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.envId},pagination:!1,"data-source":e.rolesdata},scopedSlots:e._u([{key:"read",fn:function(t,n,a){return[r("a-checkbox",{attrs:{checked:t},on:{change:function(t){return e.onChange(n,a,"read")}}})]}},{key:"write",fn:function(t,n,a){return[r("a-checkbox",{attrs:{checked:t},on:{change:function(t){return e.onChange(n,a,"write")}}})]}}],null,!1,2216865449)}):e._e()],1),r("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[r("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v("\n            取消\n            ")]),r("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("\n            提交\n            ")])],1)],1)],1)},a=[],i=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("28a5"),r("75fc")),o=r("bd86");r("7f7f"),r("6d67");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{userColumns:[{title:"用户名",dataIndex:"userName",align:"center"},{title:"角色",dataIndex:"isAdmin",align:"center",customRender:function(e){return e?"管理员":"成员"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"}],columns:[{title:"环境名称",dataIndex:"envName",align:"center"},{title:"读取权限",dataIndex:"read",align:"center",scopedSlots:{customRender:"read"}},{title:"写入权限",dataIndex:"write",align:"center",scopedSlots:{customRender:"write"}}],tabledata:[],rolesdata:[],pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},loading:!1,formModal:{},formData:{},form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:17}},productName:"",projectName:""}},created:function(){var e=JSON.parse(localStorage.getItem("rcc-info"));this.projectName=e.projectName,this.projectId=e.projectId,this.productName=e.productName,this.productId=e.productId,this.getUserlist()},methods:{handleAdd:function(){this.formModal={show:!0,title:"添加成员",option:"add"},this.getRoleList(),this.formData={}},onClose:function(){this.formModal.show=!1},getUserlist:function(){var e=this;this.$api.project.getUserList({projectId:this.projectId}).then((function(t){e.tabledata=t.data}))},getRoleList:function(){var e=this;this.$api.env.getEnvList({projectId:this.projectId}).then((function(t){e.rolesdata=t.data.dataList.map((function(e){return{envName:e.name,envId:e.id,read:!1,write:!1}}))}))},handleEdit:function(e){var t=this;this.$api.role.getUserRoles(e.productId,e.projectId,e.userId).then((function(e){var r=e.data.itemList.map((function(e){return s(s({},e),{},{read:0!==e.priType,write:2===e.priType})}));t.form.setFieldsValue({isAdmin:e.data.isAdmin}),t.rolesdata=Object(i["a"])(r)})),this.formModal={show:!0,title:"编辑权限",option:"edit",userName:e.userName}},handleOk:function(){var e=this;this.form.validateFields((function(t){if(!t){var r=e.rolesdata.map((function(e){return{envId:e.envId,envName:e.envName,priType:e.read+e.write}})),n={};n="add"===e.formModal.option?{isAdmin:e.form.getFieldValue("isAdmin"),memberNameList:e.form.getFieldValue("name").split(","),envPriDtoList:r}:{isAdmin:e.form.getFieldValue("isAdmin"),envPriDtoList:r,memberNameList:[e.formModal.userName]},e.$api.role.addUser(e.productId,e.projectId,n).then((function(t){0===t.status?(e.$message.success("操作成功!"),e.formModal.show=!1,e.form.resetFields(),e.getUserlist()):e.$message.error(t.msg)}))}}))},onChange:function(e,t,r){"write"===r?e.write?this.rolesdata[t].write=!1:(this.rolesdata[t].read=!0,this.rolesdata[t].write=!0):e.read?(this.rolesdata[t].read=!1,this.rolesdata[t].write=!1):this.rolesdata[t].read=!0},routerTo:function(e){this.$router.push(e)}}},l=u,d=r("2877"),f=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=f.exports},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb71577"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var o,i,c=String(a(t)),l=n(r),s=c.length;return l<0||l>=s?e?"":void 0:(o=c.charCodeAt(l),o<55296||o>56319||l+1===s||(i=c.charCodeAt(l+1))<56320||i>57343?e?c.charAt(l):o:e?c.slice(l,l+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"0cd8":function(e,t,r){"use strict";var n=r("5ca1"),a=r("7b23");n(n.P+n.F*!r("2f21")([].reduce,!0),"Array",{reduce:function(e){return a(this,e,arguments.length,arguments[1],!1)}})},"1bf1":function(e,t,r){"use strict";r("6d67"),r("c5f6");var n,a,o=r("f933"),i=r("ed08"),c={name:"Ellipsis",components:{Tooltip:o["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(e,t){var r=this.$createElement;return r("span",[Object(i["a"])(e,this.length)+(t>this.length?"...":"")])},getTooltip:function(e,t){var r=this.$createElement;return r(o["a"],[r("template",{slot:"title"},[e]),this.getStrDom(e,t)])}},render:function(){var e=this.$props,t=e.tooltip,r=e.length,n=this.$slots.default.map((function(e){return e.text})).join(""),a=Object(i["b"])(n),o=t&&a>r?this.getTooltip(n,a):this.getStrDom(n,a);return o}},l=c,s=r("2877"),u=Object(s["a"])(l,n,a,!1,null,null,null);t["a"]=u.exports},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),i=r("be13"),c=r("2b4c"),l=r("520a"),s=c("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=c(e),m=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=m?!o((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[s]=function(){return r}),r[f](""),!t})):void 0;if(!m||!p||"replace"===e&&!u||"split"===e&&!d){var h=/./[f],b=r(i,f,""[e],(function(e,t,r,n,a){return t.exec===l?m&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),g=b[0],v=b[1];n(String.prototype,e,g),a(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),o=r("ebd6"),i=r("0390"),c=r("9def"),l=r("5f1b"),s=r("520a"),u=r("79e5"),d=Math.min,f=[].push,m="split",p="length",h="lastIndex",b=4294967295,g=!u((function(){RegExp(b,"y")}));r("214f")("split",2,(function(e,t,r,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var o,i,c,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?b:t>>>0,g=new RegExp(e.source,u+"g");while(o=s.call(g,a)){if(i=g[h],i>d&&(l.push(a.slice(d,o.index)),o[p]>1&&o.index<a[p]&&f.apply(l,o.slice(1)),c=o[0][p],d=i,l[p]>=m))break;g[h]===o.index&&g[h]++}return d===a[p]?!c&&g.test("")||l.push(""):l.push(a.slice(d)),l[p]>m?l.slice(0,m):l}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):v.call(String(a),r,n)},function(e,t){var n=u(v,e,this,t,v!==r);if(n.done)return n.value;var s=a(e),f=String(this),m=o(s,RegExp),p=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),x=new m(g?s:"^(?:"+s.source+")",h),y=void 0===t?b:t>>>0;if(0===y)return[];if(0===f.length)return null===l(x,f)?[f]:[];var w=0,E=0,I=[];while(E<f.length){x.lastIndex=g?E:0;var _,O=l(x,g?f:f.slice(E));if(null===O||(_=d(c(x.lastIndex+(g?0:E)),f.length))===w)E=i(f,E,p);else{if(I.push(f.slice(w,E)),I.length===y)return I;for(var S=1;S<=O.length-1;S++)if(I.push(O[S]),I.length===y)return I;E=w=_}}return I.push(f.slice(w)),I}]}))},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",l=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),s=void 0!==/()??/.exec("")[1],u=l||s;u&&(i=function(e){var t,r,i,u,d=this;return s&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),l&&(t=d[c]),i=a.call(d,e),l&&i&&(d[c]=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&o.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"5ca2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("section",{staticClass:"add-btn"},[r("a-breadcrumb",{staticClass:"title"},[r("a-breadcrumb-item",{staticClass:"font-menu"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/index")}}},[e._v("首页")])]),r("a-breadcrumb-item",[e._v("\n                产品线列表\n            ")])],1),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n            新建产品线\n        ")])],1),r("a-divider",{staticClass:"divider"}),r("section",{staticClass:"content"},[r("a-table",{attrs:{columns:e.columns,"data-source":e.productLineData,"row-key":function(e){return e.id},pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t,n){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routeToProject(n)}}},[e._v(e._s(t))])]}},{key:"memo",fn:function(t){return[r("ellipsis",{attrs:{length:60,tooltip:""}},[e._v(e._s(t))])]}},{key:"members",fn:function(t){return[r("ellipsis",{attrs:{length:60,tooltip:""}},[e._v(e._s(t&&t.join()))])]}},{key:"operation",fn:function(t,n){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleAddMembers(n)}}},[e._v("添加成员")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routeToProject(n)}}},[e._v("管理工程")])]}}])})],1),r("a-modal",{attrs:{title:e.formModal.title,visible:e.formModal.show,"mask-closable":!1,"confirm-loading":e.formModal.loading,"cancel-text":"取消","ok-text":"提交"},on:{ok:e.handleOk,cancel:function(t){return e.handleCancel("formModal")}}},[r("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formData.id}],expression:"['id',{initialValue:formData.id}]"}]})],1),r("a-form-item",{attrs:{label:"产品线名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"产品线名称必填!"}],initialValue:e.formData.name}],expression:"['name',{rules: [{ required: true, message: '产品线名称必填!'}], initialValue: formData.name}]"}],attrs:{placeholder:"请输入产品线名称"}})],1),r("a-form-item",{attrs:{label:"简介"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formData.memo}],expression:"['memo', {initialValue: formData.memo}]"}],attrs:{placeholder:"请输入简介"}})],1)],1)],1),r("a-modal",{attrs:{title:e.memberModal.title,visible:e.memberModal.show,"mask-closable":!1,"confirm-loading":e.memberModal.loading},on:{ok:e.handleSubmit,cancel:function(t){return e.handleCancel("memberModal")}}},[r("a-form",{attrs:{form:e.memberForm,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["productId",{initialValue:e.memberData.id}],expression:"['productId',{initialValue:memberData.id}]"}]})],1),r("a-form-item",{attrs:{label:"成员"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["members",{rules:[{required:!0,message:"成员名称必填!"}],initialValue:e.memberData.members}],expression:"['members',{rules: [{ required: true, message: '成员名称必填!'}],\n                initialValue: memberData.members}]"}],attrs:{type:"textarea",placeholder:"请输入成员用户名，多个成员间用英文逗号分隔"}})],1)],1)],1)],1)},a=[],o=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("7f7f"),r("28a5"),r("bd86")),i=r("1bf1");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={data:function(){return{productLineData:[],columns:[{title:"产品线ID",dataIndex:"id",align:"center"},{title:"产品线名称",dataIndex:"name",align:"center",scopedSlots:{customRender:"name"}},{title:"描述",dataIndex:"memo",align:"center",scopedSlots:{customRender:"memo"}},{title:"用户",dataIndex:"members",align:"center",scopedSlots:{customRender:"members"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"}],loading:!1,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},formModal:{},formData:{},memberModal:{},memberData:{},labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},form:this.$form.createForm(this),memberForm:this.$form.createForm(this)}},components:{Ellipsis:i["a"]},created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.loading=!0,this.$api.product.getProductList().then((function(t){0===t.status?e.productLineData=t.data.dataList||[]:e.$message.error(t.msg),e.loading=!1}))},handleTableChange:function(e,t,r){this.pagination.current=e.current,this.getTableData()},handleAdd:function(){this.formModal={show:!0,title:"新增产品线",loading:!1},this.formData={}},handleEdit:function(e){this.formModal={show:!0,title:"编辑产品线",loading:!1},this.formData=l({},e)},handleCancel:function(e){this[e].show=!1,this.form.resetFields(),this.memberForm.resetFields()},handleOk:function(){var e=this;this.form.validateFields((function(t){t||(e.formModal.loading=!0,e.$api.product.updateProduct(e.form.getFieldsValue()).then((function(t){0===t.status?(e.$message.success("操作成功"),e.getTableData(),e.formModal.show=!1,e.form.resetFields()):(e.$message.error(t.msg),e.formModal.loading=!1)})))}))},handleAddMembers:function(e){this.memberModal={show:!0,title:"编辑成员",loading:!1},this.memberData=l(l({},e),{},{members:e.members?e.members.join():[]})},handleSubmit:function(){var e=this;this.memberForm.validateFields((function(t){if(!t){e.memberModal.loading=!0;var r=e.memberForm.getFieldsValue(),n=r.productId,a=r.members;e.$api.product.addProductMember(n,a.split(",")).then((function(t){0===t.status?(e.$message.success("操作成功"),e.getTableData(),e.memberModal.show=!1,e.memberForm.resetFields()):(e.$message.error(t.msg),e.memberModal.loading=!1)})).catch((function(){e.memberModal.loading=!1}))}}))},routeToProject:function(e){this.$router.push({path:"listProject",query:{productId:e.id}}),localStorage.setItem("rcc-info",JSON.stringify(l(l({},JSON.parse(localStorage.getItem("rcc-info"))),{},{productId:e.id,productName:e.name})))},routerTo:function(e){this.$router.push(e)}}},u=s,d=r("2877"),f=Object(d["a"])(u,n,a,!1,null,null,null);t["default"]=f.exports},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"6d67":function(e,t,r){"use strict";var n=r("5ca1"),a=r("0a49")(1);n(n.P+n.F*!r("2f21")([].map,!0),"Array",{map:function(e){return a(this,e,arguments[1])}})},"7b23":function(e,t,r){var n=r("d8e8"),a=r("4bf8"),o=r("626a"),i=r("9def");e.exports=function(e,t,r,c,l){n(t);var s=a(e),u=o(s),d=i(s.length),f=l?d-1:0,m=l?-1:1;if(r<2)for(;;){if(f in u){c=u[f],f+=m;break}if(f+=m,l?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;l?f>=0:d>f;f+=m)f in u&&(c=t(c,u[f],f,s));return c}},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),c="["+i+"]",l="​",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e,t,r){var a={},c=o((function(){return!!i[e]()||l[e]()!=l})),s=a[e]=c?t(f):i[e];r&&(a[r]=s),n(n.P+n.F*c,"String",a)},f=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),c=r("6a99"),l=r("79e5"),s=r("9093").f,u=r("11e9").f,d=r("86cc").f,f=r("aa77").trim,m="Number",p=n[m],h=p,b=p.prototype,g=o(r("2aeb")(b))==m,v="trim"in String.prototype,x=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var r,n,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,l=t.slice(2),s=0,u=l.length;s<u;s++)if(i=l.charCodeAt(s),i<48||i>a)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?l((function(){b.valueOf.call(r)})):o(r)!=m)?i(new h(x(t)),r,p):x(t)};for(var y,w=r("9e1e")?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)a(h,y=w[E])&&!a(p,y)&&d(p,y,u(h,y));p.prototype=b,b.constructor=p,r("2aba")(n,m,p)}},ed08:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));r("28a5"),r("0cd8");function n(){var e=new Date,t=e.getHours();return t<9?"早上好":t<=11?"上午好":t<=13?"中午好":t<20?"下午好":"晚上好"}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=0;return e.split("").reduce((function(e,n){var a=n.charCodeAt(0);return r+=a>=0&&a<=128?1:2,r<=t?e+n:e}),"")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((function(e,t){var r=t.charCodeAt(0);return r>=0&&r<=128?e+1:e+2}),0)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
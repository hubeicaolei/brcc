(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ce830"],{6088:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("section",{staticClass:"add-btn"},[r("a-breadcrumb",{staticClass:"title"},[r("a-breadcrumb-item",{staticClass:"font-menu"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/index")}}},[e._v("首页")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/productLine")}}},[e._v(e._s(e.productName)+"-产品线")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/listProject?productId="+e.productId)}}},[e._v(e._s(e.projectName)+"-工程")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/listEnv?projectId="+e.projectId)}}},[e._v(e._s(e.environmentName)+"-环境")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/listVersion?environmentId="+e.environmentId)}}},[e._v(e._s(e.versionName)+"-版本")])]),r("a-breadcrumb-item",[e._v("\n            分组列表\n        ")])],1),e.canManage?r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n        新建分组\n    ")]):e._e()],1),r("a-divider",{staticClass:"divider"}),r("section",{staticClass:"content"},[r("div",{staticClass:"table"},[r("a-table",{attrs:{columns:e.columns,"data-source":e.groupdata,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.id}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t,a){return[r("div",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.toListConfigItem(a)}}},[e._v(e._s(t))])])]}},{key:"btn",fn:function(t,a){return[e.canManage?r("a",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]):e._e(),e.canManage?r("a-divider",{attrs:{type:"vertical"}}):e._e(),e.canManage?r("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:function(t){return e.handleDelete(a.id)}}},[r("a",{attrs:{href:"javascript:;",type:"primary"}},[e._v("删除")])]):e._e(),e.canManage?r("a-divider",{attrs:{type:"vertical"}}):e._e(),r("a",{attrs:{type:"primary"},on:{click:function(t){return e.toListConfigItem(a)}}},[e._v(" 管理配置项 \n                    ")])]}}])})],1)]),r("groupdialog",{attrs:{dialog:e.dialog,formdata:e.formdata},on:{update:e.getAllList}})],1)},n=[],i=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),o=(r("96cf"),r("3b8d")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"envdialog"},[r("a-modal",{attrs:{title:e.dialog.title,visible:e.dialog.show,"confirm-loading":e.dialog.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formdata.id}],expression:"['id',{initialValue:formdata.id}]"}]})],1),r("a-form-item",{attrs:{label:"分组名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入分组名称！"}],initialValue:e.formdata.name}],expression:"[\n                        'name',{\n                        rules: [{ required: true, message: '请输入分组名称！'}],\n                        initialValue: formdata.name}]"}]})],1),r("a-form-item",{attrs:{label:"简介"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formdata.memo}],expression:"['memo', {initialValue: formdata.memo}]"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},c=[];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{dialog:Object,formdata:Object},methods:{handleOk:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.preventDefault(),this.form.validateFields((function(e){if(!e){r.dialog.loading=!0;var t="add"===r.dialog.option?"addGroup":"updateGroup";r.$api.group[t](l({versionId:r.$route.query.versionId},r.form.getFieldsValue())).then((function(e){0===e.status?(r.dialog.show=!1,r.$message.success("操作成功！"),r.form.resetFields(),r.$emit("update")):r.$message.error(e.msg)})).finally((function(){r.dialog.loading=!1}))}}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCancel:function(e){this.dialog.show=!1}}},p=d,m=r("2877"),f=Object(m["a"])(p,s,c,!1,null,null,null),g=f.exports;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=[{title:"分组ID",dataIndex:"id",key:"id",width:"20%"},{title:"分组名称",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"分组简介",dataIndex:"memo",key:"memo",width:"20%"},{title:"操作",dataIndex:"button",key:"button",scopedSlots:{customRender:"btn"}}],w={name:"listVersion",components:{groupdialog:g},created:function(){this.getAllList()},data:function(){return{groupdata:[],columns:b,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},dialog:{show:!1,title:"",label:"",option:""},formdata:{name:"",memo:""},loading:!1,canManage:!1}},methods:{getAllList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0,this.$api.group.getGroupList({versionId:this.$route.query.versionId,pageNo:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(e){r.loading=!1,r.groupdata=e.data.dataList,r.pagination.total=e.data.total,r.canManage=e.ext.canManage})),t=JSON.parse(localStorage.getItem("rcc-info")),this.projectName=t.projectName,this.projectId=t.projectId,this.productName=t.productName,this.productId=t.productId,this.environmentId=t.environmentId,this.environmentName=t.environmentName,this.versionId=t.versionId,this.versionName=t.versionName;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleTableChange:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.pagination.pageSize=t.pageSize,this.pagination.current=t.current,e.next=4,this.getAllList();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),toListConfigItem:function(e){localStorage.setItem("rcc-info",JSON.stringify(v(v({},JSON.parse(localStorage.getItem("rcc-info"))),{},{groupId:e.id,groupName:e.name}))),this.$router.push({path:"/listConfigItem",query:{groupId:e.id}})},handleDelete:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$api.group.deleteGroup(t).then((function(e){0===e.status?(r.$message.success("删除成功"),r.getAllList()):r.$message.error(e.msg)}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleEdit:function(e){this.dialog={show:!0,title:"编辑分组",option:"edit"},this.formdata=v({},e)},handleAdd:function(){this.dialog={show:!0,title:"新建分组",option:"add"},this.formdata={}},routerTo:function(e){this.$router.push(e)}}},y=w,O=Object(m["a"])(y,a,n,!1,null,null,null);t["default"]=O.exports}}]);
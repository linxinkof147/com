;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/detail/comment-list"],{"03cf":function(t,e,n){"use strict";var u=n("f302"),i=n.n(u);i.a},"0f71":function(t,e,n){"use strict";n.r(e);var u=n("ed7c"),i=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=i.a},aff4:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},ca0d:function(t,e,n){"use strict";n.r(e);var u=n("aff4"),i=n("0f71");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("03cf");var f=n("2877"),r=Object(f["a"])(i["default"],u["a"],u["b"],!1,null,"aef52f52",null);e["default"]=r.exports},ed7c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number},methods:{reply:function(){this.$emit("reply",this.item.id)},openSpace:function(){t.navigateTo({url:"../../pages/user-space/user-space?userid="+this.item.userid})}}};e.default=n}).call(this,n("c11b")["default"])},f302:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/detail/comment-list-create-component',
    {
        'components/detail/comment-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("ca0d"))
        })
    },
    [['components/detail/comment-list-create-component']]
]);                

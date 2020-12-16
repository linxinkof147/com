;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"26d0":function(n,t,e){"use strict";e.r(t);var u=e("8b0e"),c=e("774a");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("3d5e");var r=e("2877"),i=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},"3d5e":function(n,t,e){"use strict";var u=e("400d"),c=e.n(u);c.a},"400d":function(n,t,e){},"774a":function(n,t,e){"use strict";e.r(t);var u=e("943c"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a},"8b0e":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},"943c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"uni-collapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("26d0"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                

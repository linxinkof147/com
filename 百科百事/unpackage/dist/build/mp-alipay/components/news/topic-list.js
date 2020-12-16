;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/news/topic-list"],{"1bf0":function(t,e,i){},"1f38":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{ischange:{type:Boolean,default:!1},item:Object,index:Number},methods:{opendetail:function(){if(this.ischange)return t.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=i}).call(this,i("c11b")["default"])},2327:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},9562:function(t,e,i){"use strict";i.r(e);var n=i("1f38"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},a497:function(t,e,i){"use strict";i.r(e);var n=i("2327"),a=i("9562");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("c934");var u=i("2877"),o=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,"2d2518c8",null);e["default"]=o.exports},c934:function(t,e,i){"use strict";var n=i("1bf0"),a=i.n(n);a.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("a497"))
        })
    },
    [['components/news/topic-list-create-component']]
]);                

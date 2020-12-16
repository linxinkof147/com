(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{2327:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"41e3":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{ischange:{type:Boolean,default:!1},item:Object,index:Number},methods:{opendetail:function(){if(this.ischange)return t.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=i}).call(this,i("6e42")["default"])},"5b49":function(t,e,i){},9562:function(t,e,i){"use strict";i.r(e);var n=i("41e3"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},a497:function(t,e,i){"use strict";i.r(e);var n=i("2327"),a=i("9562");for(var u in a)"default"!==u&&function(t){i.d(e,t,function(){return a[t]})}(u);i("c934");var c=i("2877"),o=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"2d2518c8",null);e["default"]=o.exports},c934:function(t,e,i){"use strict";var n=i("5b49"),a=i.n(n);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("a497"))
        })
    },
    [['components/news/topic-list-create-component']]
]);                

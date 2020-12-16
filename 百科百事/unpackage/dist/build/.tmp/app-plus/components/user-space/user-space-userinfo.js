(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-space/user-space-userinfo"],{"2c90":function(e,t,n){"use strict";n.r(t);var u=n("9cda"),r=n("c18b");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("e171");var o=n("2877"),a=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,"4c788b1a",null);t["default"]=a.exports},"9cda":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},c18b:function(e,t,n){"use strict";n.r(t);var u=n("eafa"),r=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=r.a},d5bf:function(e,t,n){},e171:function(e,t,n){"use strict";var u=n("d5bf"),r=n.n(u);r.a},eafa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("e6ae"));function r(e){return e&&e.__esModule?e:{default:e}}var i={props:{userinfo:Object},computed:{getRegAge:function(){return this.userinfo.regtime?u.default.gettime.sumAge(this.userinfo.regtime):"未知"},getXingZuo:function(){return console.log(this.userinfo.birthday," at components\\user-space\\user-space-userinfo.vue:32"),this.userinfo.birthday&&"未知"!=this.userinfo.birthday&&""!==this.userinfo.birthday?u.default.gettime.getHoroscope(this.userinfo.birthday):"未知"}}};t.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-space/user-space-userinfo-create-component',
    {
        'components/user-space/user-space-userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2c90"))
        })
    },
    [['components/user-space/user-space-userinfo-create-component']]
]);                

;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/paper/paper-list"],{1403:function(e,t,n){"use strict";var u=n("a8e9"),i=n.n(u);i.a},"24d7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("components/uni-badge/uni-badge").then(n.bind(null,"54ed"))},i={components:{uniBadge:u},props:{item:Object,index:Number},computed:{getItemNoreadnum:function(){return this.item.noreadnum}},methods:{opendetail:function(){var e={userid:this.item.userid,username:this.item.username,userpic:this.item.userpic};this.User.navigate({url:"../../pages/user-chat/user-chat?userinfo="+JSON.stringify(e)}),this.$chat.Read(this.item)}}};t.default=i},"36ea":function(e,t,n){"use strict";n.r(t);var u=n("24d7"),i=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=i.a},"46ab":function(e,t,n){"use strict";n.r(t);var u=n("580f"),i=n("36ea");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("1403");var a=n("2877"),s=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,"78088bea",null);t["default"]=s.exports},"580f":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})},a8e9:function(e,t,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/paper/paper-list-create-component',
    {
        'components/paper/paper-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("46ab"))
        })
    },
    [['components/paper/paper-list-create-component']]
]);                

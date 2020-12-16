if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../components/index/index-list');
require('../../components/index/swiper-tab-head');
require('../../components/common/load-more');
require('../../components/common/no-thing');
require('../../components/uni-status-bar/uni-status-bar');
require('../../components/uni-icon/uni-icon');
require('../../components/uni-nav-bar/uni-nav-bar');
require('../../components/news/news-nav-bar');
require('../../components/common/tag-sex-age');
require('../../components/common/common-list');
require('../../components/news/topic-nav');
require('../../components/news/topic-list');
require('../../components/uni-badge/uni-badge');
require('../../components/paper/paper-list');
require('../../components/paper/paper-left-popup');
require('../../components/home/home-list-item');
require('../../components/home/home-info');
require('../../components/home/other-login');
require('../../components/home/home-data');
require('../../components/user-list/user-list');
require('../../components/common/uploud-images');
require('../../components/uni-popup/uni-popup');
require('../../components/topic/topic-info');
require('../../components/user-chat/user-chat-bottom');
require('../../components/user-chat/user-chat-list');
require('../../components/detail/detail-info');
require('../../components/detail/comment-list');
require('../../components/common/more-share');
require('../../components/mpvue-citypicker/mpvueCityPicker');
require('../../components/uni-collapse/uni-collapse');
require('../../components/uni-collapse-item/uni-collapse-item');
require('../../components/user-space/user-space-head');
require('../../components/user-space/user-space-userinfo');
require('../../components/user-space/user-space-popup');
require('../../components/uni-list/uni-list');
require('../../components/uni-list-item/uni-list-item');
require('../../pages/index/index');
require('../../pages/news/news');
require('../../pages/paper/paper');
require('../../pages/home/home');
require('../../pages/search/search');
require('../../pages/add-input/add-input');
require('../../pages/topic-nav/topic-nav');
require('../../pages/topic-detail/topic-detail');
require('../../pages/user-list/user-list');
require('../../pages/user-chat/user-chat');
require('../../pages/detail/detail');
require('../../pages/user-set/user-set');
require('../../pages/user-set-repassword/user-set-repassword');
require('../../pages/user-set-email/user-set-email');
require('../../pages/user-set-userinfo/user-set-userinfo');
require('../../pages/user-set-help/user-set-help');
require('../../pages/user-set-about/user-set-about');
require('../../pages/login/login');
require('../../pages/user-space/user-space');
require('../../pages/user-bind-phone/user-bind-phone');
require('../../pages/user-safe/user-safe');
require('../../pages/user-feedback/user-feedback');
require('../../pages/user-history/user-history');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
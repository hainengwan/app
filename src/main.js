import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import echarts from 'echarts'
import 'amfe-flexible';
import VueVideoPlayer from 'vue-video-player'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer)

require('videojs-contrib-hls');
import {
  Button,
  NavBar,
  Icon,
  Tabbar,
  TabbarItem,
  Field,
  CellGroup,
  Tab, Tabs ,
  Cell,
  Row, Col,
  Toast,
  Loading,
  List,  
} from 'vant';

Vue.use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Field).use(CellGroup)
.use(Tab).use(Tabs).use(Cell).use(Row).use(Col).use(Toast).use(Loading).use(List);




const instance = axios.create({
  // baseURL: 'http://192.168.4.78:8080/thtplatformweb/admin',
  baseURL: 'http://www.thttde.com/mpms/admin',
  timeout: 5000,

})
instance.defaults.retry = 4;
instance.defaults.retryDelay = 1000;
instance.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err);
  config.__retryCount = config.__retryCount || 0;
  if (config.__retryCount >= config.retry) {
    return Promise.reject(err);
  }
  config.__retryCount += 1;
  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay || 1);
  });
  return backoff.then(function () {
    return instance(config);
  });
});


Vue.config.productionTip = false
Vue.prototype.$http = instance
Vue.prototype.$echarts = echarts
Vue.prototype.versionCode2 = '1.0.3'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  let nowDate = new Date().getTime();
  let isLogin = localStorage.getItem('userInfo');
  if (Boolean(!isLogin) && to.path != '/Login') {
    next({
      path: '/Login'
    })
  } else if(Boolean(isLogin)&&(nowDate-JSON.parse(isLogin).loginDate)>3600* 1000*24*7){
    localStorage.removeItem('userInfo')
    next({
      path: '/Login'
    })
  }else {
    if (!to.meta.title||to.query.title) {
      to.meta.title = to.query.title
    }
    next()
    // try {
    //   if (to.path != '/login') {
    //     let menu = JSON.parse(isLogin).permissions
    //     let menu1
    //     let isAdmin = false
    //     for (let i = 0; i < menu.length; i++) {
    //       if (menu[i].name == "石景山权限管理") {
    //         menu1 = menu[i].childrens
    //         break;
    //       }
    //     }
    //     for (var i = 0; i < menu1.length; i++) {
    //       if (menu1[i].url.search(to.path) != -1 || to.path == '/homeBox/home' || to.path == '/airPort' || to.path == '/appMap') {
    //         if (menu1[i].type == 1) {
    //           to.meta.isfalg = true
    //         } else {
    //           to.meta.isfalg = false
    //         }
    //         isAdmin = true
    //         break;
    //       } else {
    //         isAdmin = false
    //       }

    //     }
    //     if (isAdmin) {
    //       next()
    //     } else {
    //       // alert('权限不足')
    //       e.$dialog.toast({
    //         mes: '权限不足',
    //         timeout: 1500
    //       });
    //       return
    //     }
    //   }
    // } catch (error) {
    //   // alert('权限不足')
    //   if (to.path == '/airPort' || to.path == '/homeBox/home' || to.path == '/appMap') {
    //     next()
    //     return
    //   } else {
    //     // console.log(a)
    //     a.$dialog.toast({
    //       mes: '权限不足',
    //       timeout: 1500
    //     });
    //     return
    //   }

    // }

  }
  // if(to.path=='/airHome/appMap'){
  //   // debugger
  //   console.log(store)
  //   store.state.active = to.query.active
  // }
  // loading().clear()
  // next()
  // 　　const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象

  // 　　var isLogin = Boolean(store.state.user.id)    // true用户已登录， false用户未登录　
  // 　　
  // 　　if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
  // 　　　　return next({ path: '/login' })   //  跳转到login页面
  // 　　}
  // debugger
  //   this.loading=true;
  // 　　debugger
  // next(vm => {
  //   debugger
  //   console.log(vm)
  //   vm.loading = true;
  // }) // 进行下一个钩子函数
});

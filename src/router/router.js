import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homes/home.vue'
import Hello from '../components/helloWorld.vue'
import HomePage from '../components/homes/homePage.vue'
import AirMap from '../components/homes/mapPage/airMap.vue'
import Login from '../components/login/login.vue'
import WorkOrder from '../components/workOrder/workOrder.vue'
import Mine from '../components/mine/mine.vue'
import PlayVideo from '../components/homes/realVideo/playVideo.vue'
import dome from '../components/homes/realVideo/dome.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '',
      redirect: '/Hello',
      // component: ,
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      redirect: '/Hello/Home',
      children: [{
          path: '/Hello/Home',
          name: 'home',
          component: Home,
          redirect: '/Hello/Home/HomePage',
          children: [{
              path: '/Hello/Home/HomePage',
              name: 'homePage',
              component: HomePage,
              meta: {
                title: '首页'
              }
            },
            {
              path: '/Hello/Home/WorkOrder',
              name: 'workOrder',
              component: WorkOrder,
              meta: {
                title: '工单',
                show: true,
              }
            },
            {
              path: '/Hello/Home/Mine',
              name: 'mine',
              component: Mine,
              meta: {
                title: '我的',
                show: true,
              },
            }
          ]
        },
        {
          path: '/Hello/AirMap',
          name: 'airMap',
          component: AirMap,
          meta: {
            title: '实时地图',
            show: true,
          },
        },
        {
          path: '/Hello/PlayVideo',
          name: 'playVideo',
          component: PlayVideo,
          meta: {
            title: '实时视频',
            show: true,
          },
        },
        {
          path: '/Hello/dome',
          name: 'dome',
          component: dome,
          meta: {
            title: '实时视频',
            show: true,
          },
        }
      ]
    },

  ]
})
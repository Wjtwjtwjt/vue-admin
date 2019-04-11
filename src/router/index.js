import Vue from 'vue'
import Router from 'vue-router'
// 登录页面
import Login from '@/pages/login/login'
// 主体部分
import Homes from '@/pages/home/homes'
// 系统首页
import System from '@/components/system/system'
// 系统设置
import Setar from '@/pages/set/set-arg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: Homes,
      children: [
        // 系统首页
        {
          path: '/system',
          name: '系统首页',
          component: System
        },
        {
          path: '/setarg',
          name: '参数设置',
          component: Setar
        }
      ]
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name === 'login') {
//     next()
//   } else {
//     // 检查是否具有当前登陆的用户信息状态
//     if (!getUserInfo()) { // 无令牌，则让其登陆去
//       next({
//         name: 'login'
//       })
//     } else { // 有令牌就允许通过
//       next()
//     }
//   }
// })

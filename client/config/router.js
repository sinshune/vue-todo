// vue-router配置文件
import Router from 'vue-router'
import routes from './routes.js'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 }
      }
    },
    // parseQuery (str) {
    //   // 将字符串(通过路由传的值)转为对象
    // },
    // stringifyQuery (obj) {
    //   // 将对象转为字符串
    // },
    fallback: true
  })
}
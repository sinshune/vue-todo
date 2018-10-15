import Vue from 'vue'
import App from './app.vue'
import VueRouter from "vue-router"
import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

// 每次路由跳转的时候都会触发这个钩子, 接收一个回调函数作为参数, 只有在回调函数中执行next()方法, 路由才会发生跳转, 否则是不会跳转的
router.beforeEach((to, from , next) => {
  console.log('路由跳转之前', to.fullPath);
  next()
});
router.beforeResolve((to, from, next) => {
  console.log('导航被确认之前');
  next();
});
router.afterEach((to, from) => {
  console.log('所有路由跳转结束');
});


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  render: h => h(App)
}).$mount(root)
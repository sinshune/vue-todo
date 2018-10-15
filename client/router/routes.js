// 路由表文件

// import Todo from './../views/todo/todo.vue'
// import Login from './../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app', // 可用于路由跳转
    path: '/app',
    props: true, // 将组件与vue-router解耦
    // component: Todo,
    component: () => import('./../views/todo/todo.vue'),
    meta: { // meta用于保存路由中的一些信息
      title: '主页'
    },
    // beforeEnter (to, from, next) {
    //   console.log('beforeEnter, 在beforeEach和beforeResolve之间执行');
    //   next();
    // }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./../views/login/login.vue'),
    meta: {
      title: '登录页'
    }
  }
]
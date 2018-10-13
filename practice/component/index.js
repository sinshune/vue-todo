import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#root',
  components: { App }, // 注册组件, 才能在template中使用
  template: '<App/>' // 用template的内容去替换整个#root, 不信你看elements里, #root变成了.app
})
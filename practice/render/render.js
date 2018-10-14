import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#root',
  // render: (h) => h(App) // 也就是说, 如果不写render方法, 而写template的话, vue也会对template进行编译, 编译的结果是生成一个render方法, render方法, 接收一回调函数作为参数, 而回调函数的参数就是原生js的createElement()方法, 从而实现创建DOM
  render: h => {
    return h('app', {
      ref: 'app'
    }, [
      h('span', {
        ref: 'span'
      }, '这是span中的内容')
    ])
  }
});
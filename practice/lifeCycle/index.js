import Vue from 'vue'

new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },

  beforeCreate () { // DOM还未生成
    console.log(this.$el, 'beforeCreate');
  },
  created () { // DOM还未生成
    console.log(this.$ell, 'created');
  },
  beforeMount () { // DOM已经生成, 但属性还未初始化
    console.log(this.$el, 'beforeMount');
  },
  mounted () { // 将Vue生成的内容挂载到DOM上, 同时属性被赋值
    console.log(this.$el, 'mounted');
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate');
  },
  updated () {
    console.log(this, 'updated');
  },
  activated () {
    console.log(this, 'activated');
  },
  deactivated () {
    console.log(this, 'deactivated');
  },
  beforeDestroy () {
    console.log(this, 'beforeDestory');
  },
  destroyed () {
    console.log(this, 'destroyed');
  }
});

//vue生命周期方法
// beforeCreate()
// created()
// beforeMount()
// mounted()
// beforeUpdate()
// updated()
// activated()
// deactivated()
// beforeDestroy()
// destroyed()
// renderError()
// errorCaptured()
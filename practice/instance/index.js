import Vue from 'vue'

const vm = new Vue({
  // el: '#root',
  template: '<div><span>asdfadsf</span></div>',
  data: {
    msg: 'hello world',
    num: 0
  },
  // watch: {
  //   num(newNum, oldNum) {
  //     console.log(newNum, oldNum)
  //   }
  // }
}).$mount('#root')

// Vue实例上的属性
// console.log(vm.$data, vm.$data.msg);
// console.log(vm.$el)
// console.log(vm.$options.data)
// console.log(vm.$data === vm.$options.data)
// vm.$nextTick(() => {
//   console.log(vm.$children)
// })
// setInterval(() => {
//   vm.$data.num ++;
// }, 1000)
// let unWatch = vm.$watch('num', (newNum, oldNum) => {
//   console.log(newNum, oldNum);
// });


// vm.$on('eventName', (one, two) => {
//   console.log('eventName方法被调用', one + two);
// })
vm.$once('eventName', () => {
  console.log('eventName方法被调用');
});

setInterval(() => {
  vm.$emit('eventName', 1, 2)
}, 1000)
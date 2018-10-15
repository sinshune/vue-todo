// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//
//   mutations: {
//     updateCount (state, num) {
//       state.count = num;
//     }
//   }
// });

// 以下是配合服务器端渲染的版本
import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },

    mutations: {
      updateCount (state, num) {
        state.count = num;
      }
    }
  });
}
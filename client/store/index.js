import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    getters,
    mutations,
    actions,

    modules: {
      a: {
        namespaced: true,
        state: {
          text: 'a模块'
        },
        mutations: {
          joinA (state) {
            console.log(state.text);
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 'b模块',
          num: 1
        },
        getters: {
          joinB (state) {
            return state.text + 'b plus';
          },

          aJoinB (state, getters, rootState) {
            return rootState.a.text + ' ' + state.text;
          }
        },
        mutations: {
          add (state, data) {
            state.num = data;
          }
        },
        actions: {
          add ( {state, commit, rootState}, data ) {
            setInterval(() => {
              commit('add', data.num++);
              commit('updateCount', data.num++, { root: true }) // 修改的是父级的state.count
            }, data.time);
          },

          fromA ( { commit } ) {
            commit('a/joinA', undefined, {root: true});
          }
        }
      }
    }
  });

  if (module.hot) {
    module.hot.accept([
      './state',
      './getters',
      './mutations',
      './actions'
    ],() => {
      const newState  = require('./state').default;
      const newGetters = require('./getters').default;
      const newMutations = require('./mutations').default;
      const newActions = require('./actions').default;

      store.hotUpdate({
        state: newState,
        getters: newGetters,
        mutations: newMutations,
        actions: newActions
      });
    });
  }

  return store;
};
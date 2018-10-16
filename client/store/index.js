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
    actions
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
import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  currentUser: {},
  isLoggedIn: false,
  token: '',
  history: [],
  message: ''
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
});

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  });
}

export default store;

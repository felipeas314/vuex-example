import Vue from 'vue';
import Vuex from 'vuex';

import { login } from './login.module';
import countModule from './count';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    login,
    count: countModule
  },
  state: {
    value_exemplate: []
  },
  mutations: {
    teste: state => {
      console.log(state);
      console.log('value: ',state.value_exemplate);
    }
  }
});
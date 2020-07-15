import Vue from 'vue';
import Vuex from 'vuex';

// import { login } from './login.module';
import login from './login';
import count from './count';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    login,
    count
  },
  state: {
    value_exemple: 'Test vuex'
  },
  mutations: {
    test: state => {
      console.log('value: ',state.value_exemple);
    }
  }
});
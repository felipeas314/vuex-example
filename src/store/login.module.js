import { loginService } from '../services/login.service';
import { router } from '../router';

const state = {
  isLogin: false,
  token: null,
  user: null
}

const getters = {
  USER: state => {
    console.log('getter');
    return state.user;
  }
}

const actions = {
  login({commit}, {username,password}){
    commit('loginRequest',{username});
    console.log('username: ',username);
    let result = loginService.login(username,password);
    if(result){
      commit('loginSucess');
      console.log('login success');
      router.push('/home');
    }
  },
  logout({commit}){
    commit('resetState');
    router.push('/');
  },
  clearState({commit}){
    commit('resetState');
  }
}

const mutations = {
  resetState(state){
    state.isLogin = false;
    state.token = null;
    state.user = null;
  },
  loginRequest(state,user){
    console.log('user:',user);
    state.isLogin = true;
    state.token = null;
    state.user = user.username;
  },
  loginSucess(state){
    state.isLogin = true;
    // state.token = null;
    // state.user = null;
  },
  loginFailure(state){
    state.isLogin = false
  }
}

export const login = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
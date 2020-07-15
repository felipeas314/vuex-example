import { router } from '../../router';
import { loginService } from '../../services/login.service';

const login = ({ commit }, { username, password }) => {
  commit('loginRequest', { username });
  console.log('username: ', username);
  let result = loginService.login(username, password);
  if (result) {
    commit('loginSucess');
    console.log('login success');
    router.push('/home');
  }
}

const logout = ({ commit }) => {
  commit('resetState');
  router.push('/');
}

const clearState = ({ commit }) => {
  commit('resetState');
}

export default {
  login,
  logout,
  clearState
}
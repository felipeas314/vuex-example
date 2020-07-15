
const resetState = (state) => {
  state.isLogin = false;
  state.token = null;
  state.user = null;
}
const loginRequest = (state, user) => {
  console.log('user:', user);
  state.isLogin = true;
  state.token = null;
  state.user = user.username;
}

const loginSucess = (state) => {
  state.isLogin = true;
  // state.token = null;
  // state.user = null;
}

const loginFailure = (state) => {
  state.isLogin = false
}


export default {
  resetState,
  loginRequest,
  loginSucess,
  loginFailure
}
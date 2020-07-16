import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import { store } from './store';
import { router } from './router';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

router.beforeEach((routeTo, routeFrom, next) => {
  console.log('Before each');
  console.log('store: ',store.state.login.user);
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})







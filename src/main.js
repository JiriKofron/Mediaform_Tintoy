import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import './quasar';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

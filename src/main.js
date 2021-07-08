import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import axios from "axios";
import store from "./store/index"

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

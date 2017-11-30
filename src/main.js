import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
import axios from 'axios';
import { LoadingState } from 'src/config/loading-state';
import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/loader';
import Toastr from 'vue-toastr';

require('vue-toastr/src/vue-toastr.less');
Vue.component('vue-toastr', Toastr);

Vue.use(VueRouter);

import 'src/config/http';
import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  router,
  store,
  components: {
    Navigation,
    Loader,
    Toastr
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
    let token = localStorage.getItem('token');
    if (token !== null) {
      store.dispatch('fetchUser', token);
      
    }
  },

  mounted() {
    this.$refs.toastr.defaultPosition = "toast-bottom-right";
    this.$refs.toastr.defaultProgressBar = false;
    this.$refs.toastr.defaultTimeout = 4000;
    axios.defaults.headers.common['Authorization'] = store.getters.token;
  }
}).$mount('#app');

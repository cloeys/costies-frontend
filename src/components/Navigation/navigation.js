import Vue from 'vue';
import template from './navigation.html';

export default Vue.extend({
  template,

  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$root.$refs.toastr.i("Successfully logged out");
      this.$router.push('/');
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    name() {
      return this.$store.state.currentUser.name;
    }
  },
  
});

import Vue from 'vue';
import VeeValidate from 'vee-validate';
import MessageMixin from '../mixins/MessageMixin';

Vue.use(VeeValidate);

import template from './login.html';

export default Vue.extend({
  template,
  mixins: [MessageMixin],
  data() {
    return {
      credentials: {}
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }

  },

  methods: {
    handleSubmit() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.login();
        }

        return this;
      });
    },
    login() {
      this.$store.dispatch("login", {
        email: this.credentials.email,
        password: this.credentials.password
      }).then(() => {
        this.$root.$refs.toastr.i("Successfully logged in!");
        this.$router.push("/")
      });
    }
  },

  mounted() {
    if (this.isLoggedIn) {
      this.$store.dispatch('setMessage', 'Not authenticated, login first');
      this.$router.push("/");
    }
  }
})

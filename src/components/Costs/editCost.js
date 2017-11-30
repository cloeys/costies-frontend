import Vue from 'vue';
import VeeValidate from 'vee-validate';
import MessageMixin from '../mixins/MessageMixin';

Vue.use(VeeValidate);

import {
  costsResource
} from 'src/util/resources';
import template from './editCost.html';

export default Vue.extend({
  template,
  mixins: [MessageMixin],
  data() {
    return {
      cost: {},
      message: null,
      id: this.$route.params.id,
    };
  },

  computed: {
    isDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },

  created() {
    this.fetchCost();
  },

  methods: {
    handleSubmit() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveCost();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000) {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    saveCost() {
      return costsResource.put(`${this.id}`, this.cost, {
          headers: {
            'Authorization': this.$store.getters.token
          }
        })
        .then((response) => {
          this.cost = response.data;

          this.showMessage({
            type: 'success',
            text: 'Cost updated!'
          });

          // TODO: We need to reset the form after success....
          // this.fields.reset();
        })
        .catch((errorResponse) => {
          // Handle error...
          this.showMessage({
            type: 'danger',
            text: errorResponse
          });
          console.log('API responded with:', errorResponse);
        });
    },

    fetchCost() {
      return costsResource.get(`${this.id}`, {
          headers: {
            'Authorization': this.$store.getters.token
          }
        })
        .then((response) => {
          this.cost = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});

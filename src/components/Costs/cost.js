import Vue from 'vue';
import MessageMixin from '../mixins/MessageMixin'

import {
  costsResource
} from 'src/util/resources';
import template from './cost.html';

export default Vue.extend({
  template,
  mixins: [MessageMixin],
  data() {
    return {
      cost: {}
    };
  },

  created() {
    this.fetchCost();
  },

  methods: {
    fetchCost() {
      const id = this.$route.params.id;

      return costsResource.get(`${id}`, {
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

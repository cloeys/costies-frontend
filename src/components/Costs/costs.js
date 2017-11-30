import Vue from 'vue';

import {
  costsResource
} from 'src/util/resources';
import template from './costs.html';
import MessageMixin from '../mixins/MessageMixin';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,
  mixins: [MessageMixin],
  data() {
    return {
      costsFilter: '',
      costs: []
    };
  },

  computed: {
    filteredCosts() {
      return this.costs.filter((cost) => cost.title.toLowerCase().indexOf(this.costsFilter.toLowerCase()) !== -1);
    }
  },

  created() {
    this.fetchCosts();
  },

  methods: {
    fetchCosts() {
      return costsResource.get('', {
          headers: {
            'Authorization': this.$store.getters.token
          }
        })
        .then((response) => {
          this.costs = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    },

    // Methods for transitions
    handleBeforeEnter(el) {
      el.style.opacity = 0;
      el.classList.add('animated');
    },

    handleEnter(el) {
      const delay = el.dataset.index * animationDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.add(animation);
      }, delay);
    }
  }
});

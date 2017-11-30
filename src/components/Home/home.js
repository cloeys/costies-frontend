import Vue from 'vue';
import template from './home.html';
import MessageMixin from '../mixins/MessageMixin';

export default Vue.extend({
  template,
  mixins: [MessageMixin]
});

import Vue from 'vue';
import './style.scss';

import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue

import moment from 'moment-timezone'; // Import time libary
moment.tz.setDefault("UTC"); // Set default time to UTC zone
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } }); // Defines a new property directly on an object, create the $Moment object Constructor

import App from './components/App.vue';

new Vue({
  el: '#app',
  data: {
    moment // Prop en object shorthand
  },
  components: {
    App
  },
  store: { // store propertie
    state: {
      currentYear: 2020,
      currentMonth: 9
    }
  }
});

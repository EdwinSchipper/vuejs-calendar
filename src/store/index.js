import Vue from 'vue';
import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue


export default new Vuex.Store({
    store: { // store propertie
        state: {
          currentYear: 2020,
          currentMonth: 9
        }
      }
});
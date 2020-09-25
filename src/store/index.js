import Vue from 'vue';
import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue


// store propertie
export default new Vuex.Store({
    state: {
        currentYear: 2020,
        currentMonth: 9
    },
    mutations: {
        // Mutations have always two properties, state and payload (any data)
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        }
    }
});
import Vue from 'vue';
import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue


// store propertie
export default new Vuex.Store({
    state: {
        // Data properties
        currentYear: 2020,
        currentMonth: 10,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false
    },
    mutations: {
        // Mutations have always two properties, state and payload (any data)
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;

        }
    }
});
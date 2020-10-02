import Vue from 'vue';

// Vuex stores are reactive.
// When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.

// Import VueX
import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue

// Import Moment
import moment from 'moment-timezone'; // Import time libary
moment.tz.setDefault("UTC"); // Set default time to UTC zone


// VueX Store
export default new Vuex.Store({
    state: {
        // Data properties
        currentYear: 2020,
        currentMonth: 10,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random event 1', date: moment('2020-09-28', 'YYYY-MM-DD') },
            { description: 'Random event 2', date: moment('2020-10-01', 'YYYY-MM-DD') },
            { description: 'Random event 3', date: moment('2020-10-17', 'YYYY-MM-DD') }
        ],
    eventFormDate: null
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
        },
        addEvent(state, payload) {
            // Push a new object into Events array
            state.events.push({ 
                description: payload,
                date: state.eventFormDate
            });
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});
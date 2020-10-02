import Vue from 'vue';

// Import VueX

// Vuex stores are reactive.
// When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.

import Vuex from 'vuex'; // import plugin
Vue.use(Vuex); // use plugin in Vue

// Import Moment
import moment from 'moment-timezone'; // Import time libary
moment.tz.setDefault("UTC"); // Set default time to UTC zone

// http requests libary
import Axios from 'axios';



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
            
        ],
    eventFormDate: moment()
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
            state.events.push(payload);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    },


    actions: {
        addEvent(context, payload) {

            return new Promise((resolve, reject) => {

                // Context basically includes the whole store(index.js).
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate
                }
            
                // Post Method from Axios libary
                Axios.post('/add_event', obj).then(response => {
                    if(response.status === 200) {
                        context.commit('addEvent', obj);
                        // the Promise.resolve() method returns a Promise object that is resolved with a given value.
                        resolve();
                    } else {
                        reject();
                    }
                });
            });

        }
    }
});
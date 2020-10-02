import './style.scss';
import moment from 'moment-timezone';
moment.tz.setDefault("UTC"); 

// Create Events Array with data from server.js
// The map() method creates a new array populated with the results of the calling array
let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})

import VueCalendar from './entry';

setTimeout(function(){
  VueCalendar(events).$mount('#app');
}, 2000);
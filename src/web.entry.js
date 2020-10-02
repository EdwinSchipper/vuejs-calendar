import Vue from 'vue';
import './style.scss';
import store from './store';
import App from './components/App.vue';
import moment from 'moment-timezone';

moment.tz.setDefault("UTC"); // Set default time to UTC zone
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } }); // Defines a new property directly on an object, create the $Moment object Constructor

// Create Events Array with data from server.js
// The map() method creates a new array populated with the results of the calling array
let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})


// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the target object.
let initialState = Object.assign({}, store.state, { events } );


// replaceState
// Replace the store's root state. Use this only for state hydration / time-travel purposes.
store.replaceState(initialState);


new Vue({
  el: '#app',
  data: {
    moment // Prop en object shorthand
  },
  components: {
    App
  },
  store, // Store propertie (store/index.js)
  render(createElement) {
    return createElement ( 
      // return virtual node
        // 1 what element?
        // 2 What options?
        // 3 Array for children
      'div',
      { attrs: { id: 'app'} },
      [ createElement('app') ]
    );
  }
});

import Vue from 'vue';
import store from './store';
import App from './components/App.vue';
import moment from 'moment-timezone';

moment.tz.setDefault("UTC"); 
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } }); 


export default function(events) {

    // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
    // It returns the target object.
    let initialState = Object.assign({}, store.state, { events } );

    // replaceState
    // Replace the store's root state. Use this only for state hydration / time-travel purposes.
    store.replaceState(initialState);

    return new Vue({
        data: {
            moment // Prop en object shorthand
        },
        components: {
            App
        },
        store, // Store propertie (store/index.js)
        render(createElement) {
            // return virtual node
                // 1) what element?
                // 2) What options?
                // 3) Array for children
            return createElement ( 
            'div',
            { attrs: { id: 'app'} },
            [ createElement('app') ]
            );
        }
    });

}
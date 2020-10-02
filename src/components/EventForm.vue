<template>
    <!-- Bind classes on div -->
    <!-- Event Listerer shorthand: @click -->
    <!-- Set .active class on div (when true)  -->
    <!-- Get X and Y values from computed functions --> 
    <div id="event-form" :class="{active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <p>{{ date.format('dddd, MMM Do') }}</p>
        <div class="text">
            <!--  v-model bind an form input to a data prop etc. -->
            <input v-focus type="text" v-model="description" placeholder="Dinner at pancho's" @keyup.enter="create">
        </div>
        
        <div class="buttons">
            <!-- Event Listerer shorthand: @click with a function 'create' -->
            <button @click="create">Create</button>
        </div>
            
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ''
        }
    },
    
    methods: {
        close() {
            // Switch class active to false
            this.$store.commit('eventFormActive', false);
        },
        create() {
            if(this.description.length > 0 ) {
                // Call actions function AddEvent from VueX store
                this.$store.dispatch('addEvent', this.description).then(_ => {
                    this.description = '';
                    this.$store.commit('eventFormActive', false);
                });

            } else {
                alert('No input for event');
            }
        }
    },
    
    computed: {
        date() {
            // Get value from the Store (index.js) State
            return this.$store.state.eventFormDate;
        },
        active() {
            return this.$store.state.eventFormActive;
        },
        top() {
            // Get value from the Store (index.js) State
            return `${this.$store.state.eventFormPosY}px`;
        }, 
        left() {
            // Get value from the Store (index.js) State
            return `${this.$store.state.eventFormPosX}px`;
        }
    },

    directives: {
        focus: {
            update(el) {
                console.debug('update');
                el.focus();
            }

        }
    }

}
</script>
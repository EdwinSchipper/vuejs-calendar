<template>
    <!-- Bind classes on div -->
    <!-- Event Listerer shorthand: @click -->
    <!-- Set .active class on div (when true)  -->
    <!-- Get X and Y values from computed functions --> 
    <div id="event-form" :class="{active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        
        <div class="text">
            <!--  v-model bind an form input to a data prop etc. -->
            <input type="text" v-model="description">

            <div class="buttons">
                <!-- Event Listerer shorthand: @click with a function 'create' -->
                <button @click="create">Create</button>
            </div>
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
            // Call function AddEvent from VueX store
            this.$store.commit('addEvent', this.description);
        }
    },
    
    computed: {
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
    }

}
</script>
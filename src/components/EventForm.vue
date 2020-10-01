<template>
    <!-- Bind classes on div -->
    <!-- Event Listerer shorthand: @click -->
    <!-- Set .active class on div (when true)  -->
    <!-- Get X and Y values from computed functions --> 
    <div id="event-form" :class="{active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            // Switch class active to false
            this.$store.commit('eventFormActive', false)
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
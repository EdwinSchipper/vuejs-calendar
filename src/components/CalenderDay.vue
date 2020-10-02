<template>
    <!-- Shorthand Click Event: @click="" --> 
    <!-- Attach a function (captureClick) when click -->
    <div v-bind:class="classObject" @click="captureClick">
        {{ day.format('D') }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['day'],
    computed: {
        // Create event list-items
        events() {
            // Get (events) value from Vuex store and return data with filter conditions
            return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'));
        },
        // Create css classes
        classObject() {
            let eventFormDate = this.$store.state.eventFormDate;
            let eventFormActive = this.$store.state.eventFormActive;
            let today = this.day.isSame(this.$moment(), 'day');
            return {
                day: true,
                today, // true of false
                past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
                active: eventFormDate.isSame(this.day, 'day') && eventFormActive
            };
        }
    },
    methods: {
        captureClick(event) {
            console.log(event);
            // Create mutation + payload. From VueX store (index.js)
            this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY }); // Set Position
            this.$store.commit('eventFormActive', true); // Switch class active to true
            this.$store.commit('eventFormDate', this.day); // Get clicked date
        }
    }
}

</script>
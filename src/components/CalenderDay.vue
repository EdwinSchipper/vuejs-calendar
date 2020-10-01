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
            let mockData = [
                { description: 'Random event 1', date: this.$moment('2020-09-28', 'YYYY-MM-DD') },
                { description: 'Random event 2', date: this.$moment('2020-10-01', 'YYYY-MM-DD') },
                { description: 'Random event 3', date: this.$moment('2020-10-17', 'YYYY-MM-DD') }
            ];
            // Return data met filter condities
            return mockData.filter(event => event.date.isSame(this.day, 'day'));
        },
        // Create css classes
        classObject() {
            let today = this.day.isSame(this.$moment(), 'day');
            return {
                day: true,
                today, // true of false
                past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
            };
        }
    },
    methods: {
        captureClick(event) {
            console.log(event);

            // Create mutation + payload
            this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY }); // Set Position
            this.$store.commit('eventFormActive', true); // Switch class active to true
        }
    }
}

</script>
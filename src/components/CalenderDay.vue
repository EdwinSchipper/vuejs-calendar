<template>
    <!-- Shorthand Click Event: @click="" --> 
    <!-- Attach a function (captureClick) when click -->
    <div v-bind:class="classObject" @click="captureClick">{{ day.format('D') }} </div>
</template>

<script>
export default {
    props: ['day'],
    computed: {
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
            this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY });
        }
    }
}

</script>
<template>
    <div v-bind:class="classObject">{{ day.format('D') }} </div>
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
    }
}

</script>
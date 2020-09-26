<template>
    <!-- Bind classes on div -->
    <!-- Set .active class on div (when true)  -->
    <!-- Get X and Y values from computed functions --> 
    <div id="event-form" :class="{active: true }" :style="{ top: top, left: left }"></div>
</template>

<script>
export default {
    computed: {
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
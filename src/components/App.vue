<template>
    <div>
        <div id="header">
            <div>
                <img src="../assets/logo.png" alt="">
                <h1>{{ msg }}</h1>
            </div>
            <div>
                <current-month></current-month>
            </div>
        </div>
        
        <div id="day-bar">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
    
        <div id="calendar"> 
            <!-- Loop Weeks array data -->
            <div v-for="week in weeks" class="calendar-week">
                <!-- loop trough current Week (multi-dimensional) array -->
                <calender-day v-for="day in week" :day="day"></calender-day>
            </div>
        </div>

        <event-form></event-form>

    </div>
</template>

<script>
    import CalenderDay from './CalenderDay.vue';
    import CurrentMonth from './CurrentMonth.vue';
    import EventForm from './EventForm.vue';


    export default {
        data() {
            return { 
                msg: 'Vue.js Calendar',
                // month: 9,
                // year: 2020
            };
        },

        // Computed properties
        computed: {
            month() {
                return this.$store.state.currentMonth;
            },
            year() {
                return this.$store.state.currentYear;
            },
            days() {

                // Generating all days in current month
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D'); // first day of current month

                    // Fill days array: Loop trough month from First Day of the month
                    do { 
                        days.push(currentDay);
                        currentDay = this.$moment(currentDay).add(1, 'days');
                    } while((currentDay.month() +1) === this.month);

                // Add previous days to start
                currentDay = this.$moment(days[0]);
                const SUNDAY = 0;
                const MONDAY = 1;
                if(currentDay.day() !== MONDAY) {
                    do {
                        currentDay = this.$moment(currentDay).subtract(1, 'days');
                        days.unshift(currentDay); // Add at start of the array with unshift
                    } while(currentDay.day() !== MONDAY);
                }

                // Add following days to end
                currentDay = this.$moment(days[days.length - 1]); // grabs the last day of the month
                if(currentDay.day() !== SUNDAY) {
                    do {
                        currentDay = this.$moment(currentDay).add(1, 'days');
                        days.push(currentDay);
                    } while(currentDay.day() !== SUNDAY);
                }

                // Return All Days array
                return days;
            },
            weeks() {
                let weeks = [];
                let week = [];

                for (let day of this.days) {
                    week.push(day);
                    if(week.length === 7) {
                        weeks.push(week);
                        week = [];
                    }
                }

                // Return complete month in weeks multi-dimensional array
                // A multi-dimensional array is an array with more than one level or dimension
                console.log('weeks:');
                console.log(weeks);
                return weeks;

            }
        },

        components: {
            CalenderDay,
            CurrentMonth,
            EventForm
        },

        created() {
            console.log(this.$moment); // Acces to the moment libary
        }
    }
</script>

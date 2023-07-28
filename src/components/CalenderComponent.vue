<script>
import { runTransaction } from 'firebase/firestore';
import { ref } from 'vue';

export default {
    data() {
        return {
            range: ref({
                start: new Date(),
                end: new Date(2023, 6, 30)
            })
        }
    },
    methods: {
        hideCalender() {
            this.$emit("hide-calender", false);
        },
        run(){
            const dayStart = `${this.range.start.getDate()} Tháng ${this.range.start.getMonth() + 1}`
            const dayEnd = `${this.range.end.getDate()} Tháng ${this.range.end.getMonth() + 1}`
            console.log(dayStart + " - " + dayEnd);
            const rangeDateString = {
                start: dayStart,
                end: dayEnd
            }
            this.$emit("date-to-flight", rangeDateString)
        }
        
    }
}
</script>

<template>
    <div class="login_cover">
        <div class="calender-box">
            <div class="wrap-calender">
                <div class="calender-box">
                    <VDatePicker v-model.range="range" mode="date" style="animation: pop-in ease 0.2s;" />
                </div>
                <div @click="hideCalender()" class="calender-close">
                    <font-awesome-icon :icon="['fas', 'circle-xmark']" />
                    <!-- <p style="color: white;">{{ range.start.toString() }}</p> -->
                </div>
            </div>

            <div @click="run(range.start.toString(), range.end.toString())" class="btn-calender">
                <button>Chọn</button>
            </div>

        </div>
    </div>
</template>

<style></style>
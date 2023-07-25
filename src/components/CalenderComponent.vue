<script>
export default {
    methods: {
        hideCalender() {
            this.$emit("hide-calender", false);
        }
    }
}
</script>

<template>
    <div class="login_cover">
        <div class="wrap-calender">
            <div class="calender-box">
                <VCalendar style="animation: pop-in ease 0.2s;">
                </VCalendar>
            </div>
            <div @click="hideCalender()" class="calender-close">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" />
            </div>
        </div>
    </div>
</template>

<style></style>
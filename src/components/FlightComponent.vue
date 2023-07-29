<script>
export default {
    props: [
        "flight"
    ],
    data() {
        return {
            res: {}
        }
    },
    mounted() {
        this.res = this.flight
        console.log(this.flight)
    },
    methods: {

        transfer() {
            this.$emit("transfer-cb", this.res)
        }
    }
}
</script>
<template>
    <div class="flight-component">
        <div class="component-data">
            <div class="component-macb">
                <span>Mã chuyến bay</span>
                <p>{{ flight.MaChuyenBay }}</p>
            </div>
            <div class="component-diemden">
                <span>Điểm đến</span>
                <p>{{ flight.DiemDen }}</p>
            </div>
            <div class="component-diemdi">
                <span>Điểm đi</span>
                <p>{{ flight.DiemDi }}</p>
            </div>
            <div class="component-thoigianbay">
                <span>Thời gian bay</span>
                <p>{{ flight.ThoiGianBay }}</p>
            </div>
        </div>

        <div class="component-input">
            <input @click="transfer()" type="radio" name="checkToEdit">
        </div>
    </div>
</template>
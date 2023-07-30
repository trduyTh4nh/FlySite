<script>
export default {
    props: [
        "data"
    ],
    data() {
        return {
            res: {}
        }
    },
    mounted() {
       // this.res = this.data
        console.log(this.data)
    },
}
</script>
<template>
    <div class="div_ticket">
        <div class="gr_ticket">
            <div class="ticket">
                <div class="wrap-ticket">
                    <img class="img_ticket"
                        src="https://logos-world.net/wp-content/uploads/2020/04/Airbus-Logo-2001-2010.png" alt="">
                </div>
                <div class="in_ticket">
                    <div class="in_in_ticket">
                        <div class="day_go">
                            <p class="text_temp">{{ data.NgayDi }}</p>
                            <button class="btn_tempGo">
                                <p class="text_lv">{{ data.ChuyenBayDi }}</p>
                            </button>
                        </div>
                        <div class="time_fly">

                        </div>
                        <div class="day_go">
                            <p class="text_temp">{{ data.NgayVe }}</p>
                            <button class="btn_tempGo">
                                <p class="text_lv">{{ data.ChuyenBayDen }}</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <hr style="border: 2px dashed #c2c2c2; margin: 2rem;" />
            <div class="ticket_del">
                <img class="img_QR"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="">
                <div class="del_inf1">
                    <p class="main_inf1">{{ data.TongTien }}</p>
                    <p class="headed_inf">Total price</p>
                </div>
                <div class="del_inf1">
                    <p class="main_inf1">{{ data.LoaiVe }}</p>
                    <p class="headed_inf">Ticket type</p>
                </div>
                <div class="bk_prep">
                    <p class="text_prep">Booked</p>
                </div>
                <div class="bk_prep">
                    <p class="text_prep">Paid</p>
                </div>
                <button class="btn_Seetk">
                    <p class="text_Seetk">Download QR Code</p>
                </button>
                <button class="btn_Seetk">
                    <p class="text_Seetk">Deliver it to me</p>
                </button>
            </div>
        </div>


    </div>
</template>
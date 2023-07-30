<script>
    import Ticket from '../components/Ticket.vue'
    import {getTicketByIDCB} from '../helper'
    export default{
        components: {
            Ticket
        },
        props: [
            "Chuyenbay",
            "usr"
        ],
        data(){
            return {
                ticket: [],
                show: false
            }
        },
        methods: {
            showTickets(){

                getTicketByIDCB(this.Chuyenbay.MaChuyenBay, this.Chuyenbay).then(e => {
                    this.show = !this.show
                    if(this.show){
                        this.ticket = e
                        console.log(e)
                    }
                })
            }
        }
    }
</script>
<template>
    <div class="cb_wrapper">
        <div class="cb">
            <h1>{{ Chuyenbay.MaChuyenBay }}</h1>
            <div class="ticket_details">
                <div class="flight_time">
                    <div class="time_detail">
                        <p>Điểm đi</p>
                        
                        <div class="destination">
                            <p>{{ Chuyenbay.DiemDi }}</p>
                        </div>
                    </div>
                </div>
                <div class="lotrinh">
                    <div class="est_time">
                        <font-awesome-icon :icon="['fas', 'plane-departure']" />
                        <p>Bay thẳng - {{ Chuyenbay.ThoiGianBay }} Giờ</p>
                    </div>
                    <hr class="sep"/>
                </div>
                <div class="flight_time">
                    <div class="time_detail">
                        <p>Điểm đến</p>
                        <div class="destination arrival">
                            <p>{{ Chuyenbay.DiemDen }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="showTickets()" class="see_ticket">
                <p>{{ show ? 'Ẩn vé' : 'Hiện vé' }}</p>
            </button>
        </div>
        <div class="vebay_wrapper" v-if="show">
            <Ticket v-for="t in ticket" :ticket="t" :usr="usr"/>
        </div>
    </div>
</template>
<style scoped>
    
    .cb_wrapper{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 25px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.296);
    }
    .cb{
        width: 100%;
        padding: 25px 0;
        display: flex;
        justify-content: space-between;
    }
    h1{
        color: black !important;
    }
    .book_wrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .sep{
        border: 1px #878787 solid;
    }
    .lotrinh{
        width: 100%;
        flex: 1;

    }
    .est_time{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .est_time svg{
        font-size: 10px;
    }
    .ticket_details{
        margin: 0 30px;
        display: flex;
        align-items: center;
        gap: 25px;
        flex: 1;
    }
    .image_wrapper{
        display: flex;
        align-items: center;
        padding: 16px 0;
        padding-right: 30px;
        border-right: 2px #878787 solid;
    }
    .ticket img{
        width: 6rem;
    }
    .destination{
        padding: 5px 10px;
        background-color: #4F95FF;
        border-radius: 30px;
        color: white;
        width: fit-content;
    }
    .arrival{
        background-color: #F9A150;
    }
    button{
      transition: ease 0.2s;
      padding: 10px;
      background-color: #F9A150;
      border: none;
      box-shadow: 0px 8px 15px 0px rgba(249, 161, 80, 0.51);
      border-radius: 10px;
      font-size: 1rem;
      color: white;
    }
    button:hover{
      box-shadow: 0px 0px 0px 0px rgba(249, 161, 80, 0.51);
    }
    button:active{
      transform: scale(95%);
    }
    .see_ticket{
        background-color: #4F95FF;
        box-shadow: none;
        padding: 16px 35px;
    }
    .vebay_wrapper{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>
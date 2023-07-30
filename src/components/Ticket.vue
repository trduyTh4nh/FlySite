<script>
    import {ifExistsOrder} from '../helper'
    export default{
        props:[
            "ticket",
            "bookButton",
            "usr"
        ],
        data(){
            return {
                isbooked: false,
            }
        },
        watch: {
            usr(){
                    this.isbooked = true
                    console.log(this.usr)
                    ifExistsOrder(this.usr[0].Email, this.ticket.MaVe).then(
                    e => {
                        this.isbooked = e
                    }
                )
                
            }
        },
        mounted(){
            if(this.usr != undefined){
                if(Object.keys(this.usr).length != 0)
                    ifExistsOrder(this.usr[0].Email, this.ticket.MaVe).then(
                        e => {
                            console.log(e)
                            this.isbooked = e
                        }
                    )
                }
            }
        }
    
</script>
<template>
    <div class="ticket">
        <div class="image_wrapper">
            <img src="../assets/vietjet.png"/>
        </div>
        <div class="ticket_details">
            <div class="flight_time">
                <div class="time_detail">
                    <p>{{ ticket.NgayDi }}</p>
                    
                    <div class="destination">
                        <p>{{ ticket.cityFrom }}</p>
                    </div>
                </div>
            </div>
            <div class="lotrinh">
                <div class="est_time">
                    <font-awesome-icon :icon="['fas', 'plane-departure']" />
                    <p>Bay thẳng - {{ ticket.ThoiGianBay }} Giờ</p>
                </div>
                <hr class="sep"/>
            </div>
            <div class="flight_time">
                <div class="time_detail">
                    <p>{{ ticket.NgayVe }}</p>
                    <div class="destination arrival">
                        <p>{{ ticket.cityTo }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="book_wrapper">
            <div class="price">
                <h2>{{ ticket.GiaVe }} VND</h2>
                <p>Mỗi hành khách</p>
            </div>
            <button :disabled="isbooked" v-if="!bookButton" @click="$emit('book-event', ticket)">Đặt ngay</button>
        </div>
    </div>
</template>
<style scoped>
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
    .ticket{
        width: 100%;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.25);
        padding: 16px 49px;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
</style>
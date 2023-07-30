<script>
    import Ticket from '../components/Ticket.vue'
    import {getSearch} from '../helper'
    export default{
        props: [
            "isLoggedIn",
            "usr"
        ],
        components: {
            Ticket,
    
        },
        mounted(){
            var result = this.$route.query.q;
            var resultClass = JSON.parse(result)
            this.result = resultClass
            console.log(resultClass)
            getSearch(resultClass).then(
                e => {
                    this.tickets = e;
                }
            )
        },
        data(){
            return {
                tickets: [],
                result: JSON.parse(this.$route.query.q),
                loginNoti: true,
            }
        },
        methods: {
            startBooking(e){
                if(this.isLoggedIn){
                    var ticketString = JSON.stringify(e)
                    console.log(ticketString)
                    console.log(this.usr)
                    this.$router.push('/ticket/'+ticketString)
                } else {
                    alert("Bạn chưa đăng nhập.")
                }
            }
        }
    }
    
</script>
<template>
    <div class="background_top">
        <div class="content_wrapper">
            <div class="dest_arrival">
                <div class="depart">
                    <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'plane-departure']" />
                    </div>
                    <div>
                        <h1>{{ result.cityFrom }}</h1>
                        <p>Điểm đi</p>
                    </div>
                </div>
                <font-awesome-icon style="font-size: 2rem;" :icon="['fas', 'arrow-right']" />
                <div class="depart">
                    <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'plane-arrival']" />
                    </div>
                    <div>
                        <h1>{{ result.cityTo }}</h1>
                        <p>Điểm về</p>
                    </div>
                </div>
            </div>
            <div class="dest_arrival">
                <div class="depart">
                    <div class="small_icon">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    </div>
                    <div>
                        <h3>Ngày đi</h3>
                        <a>{{ result.dateFlight.start }}</a>
                    </div>
                </div>
                <div class="depart">
                    <div class="small_icon">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    </div>
                    <div>
                        <h3>Ngày về</h3>
                        <a>{{ result.dateFlight.end }}</a>
                    </div>
                </div>
                <div class="depart">
                    <div class="small_icon">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                    <div>
                        <h3>Passengers</h3>
                        <a>{{ result.qtAdult.numAdult }} người lớn, {{ result.qtAdult.numChild }} trẻ em, {{ result.qtAdult.numBaby }} em bé</a>
                    </div>
                </div>
                <div class="depart">
                    <div class="small_icon">
                        <font-awesome-icon :icon="['fas', 'ticket']" />
                    </div>
                    <div>
                        <h3>Ticket type</h3>
                        <a>{{ result.type }}</a>
                    </div>
                </div>
            </div>
            <button @click="this.$router.push('/')" class="btn_search">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                <p>Search again</p>
            </button>
        </div>
        <img class="img_main" src="https://i.pinimg.com/originals/20/d9/c9/20d9c9ccfee8b5892a145199e458fc79.gif" />
    </div>
    <div class="card_wrapper">
        <div v-if="!isLoggedIn && loginNoti" class="not_logged_in">
            <div class="not_logged_in_contain">
                <div class="not_logged_in_left">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
                <div class="not_logged_in_right">
                    <h2>Bạn chưa đăng nhập!</h2>
                    <p>Hãy đăng nhập để đặt vé, nhận hỗ trợ về vé và xem lịch sử đặt vé.</p>
                </div>
            </div>
            <div class="not_logged_in_btn_login">
                <button @click="$emit('signin-callback', true)">
                    <p>Đăng nhập</p>
                </button>
                <button class="outlined" @click="loginNoti = false">
                    <p>Đóng</p>
                </button>
            </div>
        </div>
        <Ticket :usr="usr" @book-event="e => {startBooking(e)}" v-for="ticket in tickets" :ticket="ticket"/>
    </div>
</template>
<style scoped> 
    .not_logged_in_btn_login{
        display: flex;
        gap: 25px;
    }
    .not_logged_in_contain{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .not_logged_in{
        box-shadow: 0 4px 14px #ffafaf;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
        background-color: white;
        padding: 25px;
        border-radius: 16px;
    }
    .not_logged_in_left svg{
        font-size: 34px;
        color: #ffafaf;
    }
    .btn_search{
        width: 50%;
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 8px 15px 0px rgba(249, 161, 80, 0.51);
        background-color: #F9A150;
        color: white;
        font-size: 16px;
    }
    .btn_search:hover{
        box-shadow: 0px 0px 0px 0px rgba(249, 161, 80, 0.51);
    }
    .btn_search:active{
        transform: scale(95%);
    }
    .card_wrapper{
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: relative;
        z-index: 1;
        margin: -55px;
        padding: 0 15%;
    }
    .content_wrapper{
        color: white;
        display: flex;
        flex-direction: column;
        gap: 25px;
        justify-content: center;
        align-items: center;
        padding: 5rem 25%;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.326);
        box-sizing: border-box;
    }
    .icon_wrapper svg{
        font-size: 24px;
    }
    .icon_wrapper{
        padding: 22px 20px;
        background-color: #F9A150;
        border-radius: 50px;
    }
    .depart{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .dest_arrival{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .small_icon{
        background-color: white;
        padding: 13px 15px;
        border-radius: 50px;
    }
    .small_icon svg{
        color: #0060F0;
    }
</style>
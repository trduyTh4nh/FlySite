<script>
    export default{
        props:[
            "ticket",
            "bookButton"
        ]
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
                    <p>27 Feb</p>
                    <h3>23:56</h3>
                    <div class="destination">
                        <p>SGN</p>
                    </div>
                </div>
            </div>
            <div class="lotrinh">
                <div class="est_time">
                    <font-awesome-icon :icon="['fas', 'plane-departure']" />
                    <p>Direct - 4:54:00</p>
                </div>
                <hr class="sep"/>
            </div>
            <div class="flight_time">
                <div class="time_detail">
                    <p>28 Feb</p>
                    <h3>23:56</h3>
                    <div class="destination arrival">
                        <p>SGN</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="book_wrapper">
            <div class="price">
                <h2>1000 VND</h2>
                <p>Mỗi hành khách</p>
            </div>
            <button v-if="bookButton">Đặt ngay</button>
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
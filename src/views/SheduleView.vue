<script>
  import Title from '../components/TitleComponent.vue'
  import ChuyenBay from '../components/ChuyenBayComponent.vue'
  import { getAllFlight } from '../helper';
  export default{
    components: {
      Title,
      ChuyenBay
    },
    props: [
      "usr",
      "isLoggedIn"
    ],
    data(){
      return {
        chuyenBay: []
      }
    },
    mounted(){
      getAllFlight().then(e => this.chuyenBay = e)
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
  <Title></Title>
  <div class="flight_wrapper">
    <div>
      <h1>Chuyến bay</h1>
      <p style="color: white;">Xem tất cả các chuyến bay và vé tương ứng</p>
    </div>
    <div class="chuyenbay_wrapper">
      <ChuyenBay @book-event="e => {startBooking(e)}" :usr="usr" :Chuyenbay="cb" v-for="cb in chuyenBay"></ChuyenBay>
    </div>
  </div>
</template>

<style>
  .flight_wrapper{
    top: 13rem;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    padding: 0 6rem !important;
    margin-top: -2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
  .flight_wrapper h1{
 
    color: white;
  }
  .chuyenbay_wrapper{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
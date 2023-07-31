<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Register from './components/signupcomponent.vue'
import Login from './components/LoginComponent.vue'
import SearchTakeOff from './components/TakeOfComponent.vue'
import SearchArrive from './components/ArriveComponent.vue'
import Calender from './components/CalenderComponent.vue'
import TicketType from './components/TicketTypeComponent.vue'
import Adult from './components/AdultComponent.vue'
import { faL, fas } from '@fortawesome/free-solid-svg-icons'
import { arrayRemove } from 'firebase/firestore'
import { getUserCurrentByEmail } from './helper'
import inFoUser from './components/InfoUserComponent.vue'
export default{
  components:{
    Header,
    Register,
    Login,
    RouterLink,
    RouterView,
    SearchTakeOff,
    SearchArrive,
    Calender,
    TicketType,
    Adult,
    inFoUser
  },
  data(){
    return {
      dialogLogin: false,
      dialogRegis: false,
      isLogin: true,
      popupTakeOff: false,
      popupArrive: false,
      popUpCalender: false,
      popUpAdult: false,
      popUpTicketType: false,
      takeoff: "Chuyến bay đi",
      arrive: "Chuyến bay đến",
      dateFlight: "00 Ngày - 0",
      ticketType: "Loại vé",
      quantityAdult: {},
      userbox: false,
      dynamic_email: "",
      username: '',
      usr: {},
      isLoggedIn: false,
      popUpInfo: false
    }
  },
  methods:{
      getInfo(){
            
            getUserCurrentByEmail(this.dynamic_email).then(
                e => {
                    this.usr = e
                    this.username = this.usr[0].TenKH
                    console.log(this.username)
                    this.isLoggedIn = true;
                    if(this.dynamic_email == 'admin@gmail.com'){
                      this.$router.push('/admin/listcb')
                    }
                    console.log(this.dynamic_email + " new, old ")
                })
    },
    swap(){
      var c;
      c = this.arrive
      this.arrive = this.takeoff
      this.takeoff = c
    },
    logout(){
      this.usr = {}
      this.isLogin = true;
      this.userbox = false
      this.popUpInfo = false
    }
  }
}
</script>
<template>
  <div id="app-main">
    <inFoUser @logout="() => {logout()}" :usr="usr" @call-to-close="e => popUpInfo = e" v-if="popUpInfo"></inFoUser>
    <TicketType @callback-tiket="e => {ticketType = e, popUpTicketType = false}" @close-popUp="e => popUpTicketType = e" v-if="popUpTicketType" ></TicketType>
    <Adult @call-tohome="e => {quantityAdult = e, popUpAdult= false}" @hide-adult="e => popUpAdult = e" v-if="popUpAdult"></Adult>
    <Calender @date-to-flight="e => {dateFlight=e, popUpCalender = false}  " @hide-calender="e => popUpCalender = e"  v-if="popUpCalender" style="position: absolute;z-index: 5;"></Calender>
    <SearchArrive @connect-arrive="e => { arrive = e ; popupArrive = false}" @hide-arrive="e => popupArrive = e" v-if="popupArrive"></SearchArrive>
    <SearchTakeOff  @takeoff-connect="e => {takeoff = e; popupTakeOff = false}" @hide-takeoff="e => popupTakeOff = e" v-if="popupTakeOff" ></SearchTakeOff>
    <Register @signup-callback-close="e => dialogRegis = e" v-if="dialogRegis"></Register>
    <Login @email-transfer="e => {dynamic_email = e; getInfo()}" @show-user="e => userbox = e"  @hide-button="e => isLogin = e" @login-callback-close="e => dialogLogin = e"  v-if="dialogLogin"></Login>
    <div id="app-main_header">  
      <Header @open-window="e => popUpInfo = e" :DynamicEmail="username" :showUser="userbox"   :isLogin="isLogin" @signin-callback="e => dialogLogin = e" @signup-callback="e => dialogRegis = e"></Header>
    </div>
      <div id="app-main_body">
        <RouterView @call-reverse="() => {swap()}" :EmailDynamic="dynamic_email" :usr="usr" @signin-callback="e => dialogLogin = e" :isLoggedIn="isLoggedIn" :QTTadult="quantityAdult" :TicketType="ticketType" :DateFlight="dateFlight"  :CityTo="arrive" @popDest-callback="e => {popupTakeOff = true}" :CityFrom="takeoff" @popUpTicket-callback="e => popUpTicketType = e" @popUpAdult-callback="e => popUpAdult = e"   @popCalender-callback="e => popUpCalender = e" @popArrive-callback="e => popupArrive = e" @popTakeOff-callback="e => popupTakeOff = e" ></RouterView>
      </div>
  </div>
</template>
<style>
       
</style>
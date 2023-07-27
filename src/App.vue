<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Register from './components/SignUpComponent.vue'
import Login from './components/LoginComponent.vue'
import SearchTakeOff from './components/TakeOfComponent.vue'
import SearchArrive from './components/ArriveComponent.vue'
import Calender from './components/CalenderComponent.vue'
import TicketType from './components/TicketTypeComponent.vue'
import Adult from './components/AdultComponent.vue'

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
    Adult
  },
  data(){
    return {
      dialogLogin: false,
      dialogRegis: false,
      isLogin: true,
      popupTakeOff: false,
      popupArrive: false,
      popUpCalender: false,
      popUpAdult: false
    }
  }
}
</script>
<template>
  <div id="app-main">
    <Adult @hide-adult="e => popUpAdult = e" v-if="popUpAdult"></Adult>
    <Calender @hide-calender="e => popUpCalender = e"  v-if="popUpCalender" style="position: absolute;z-index: 5;"></Calender>
    <SearchArrive @hide-arrive="e => popupArrive = e" v-if="popupArrive"></SearchArrive>
    <SearchTakeOff  @hide-takeoff="e => popupTakeOff = e" v-if="popupTakeOff" ></SearchTakeOff>
    <Register @signup-callback-close="e => dialogRegis = e" v-if="dialogRegis"></Register>
    <Login  @hide-button="e => isLogin = e" @login-callback-close="e => dialogLogin = e"  v-if="dialogLogin"></Login>
    <TicketType></TicketType>
    <div id="app-main_header">
      <Header :isLogin="isLogin" @signin-callback="e => dialogLogin = e" @signup-callback="e => dialogRegis = e"></Header>
    </div>
      <div id="app-main_body">

        <RouterView @popUpAdult-callback="e => popUpAdult = e"   @popCalender-callback="e => popUpCalender = e" @popArrive-callback="e => popupArrive = e" @popTakeOff-callback="e => popupTakeOff = e" ></RouterView>
      </div>
  </div>
</template>
<style>
       
</style>
<script>
import LoginComponent from '../components/LoginComponent.vue'
import SignupComponent from '../components/SignUpComponent.vue'
import TakeOff from '../components/TakeOfComponent.vue'

export default{
  props:{
    CityTo: String,
    CityFrom: String,
  },
  components:
  {
    LoginComponent,
    signup: SignupComponent,
    TakeOff
  },
  props:{
    CityFrom: String,
    CityTo: String,
    DateFlight: String,
    TicketType: String,
    QTTadult: Object
  },
  data(){
    return {
        
    }
  },
  methods:{
    popUpSearchTakeOff(){
       this.$emit("popTakeOff-callback", true)
    },
    popUpSearchTakeOff(){
      this.$emit("popArrive-callback", true)
    },
    popUpCalender(){
      this.$emit("popCalender-callback", true)
    },
    popUpAdult(){
      this.$emit("popUpAdult-callback", true)
      this.testdata()
    },
    popUpTicket(){
      this.$emit("popUpTicket-callback", true);
    },
    popUpDestTakeOff(){
      console.log("Take off");
      this.$emit("popDest-callback", true)
    },
    search(){
      var cityFrom = this.CityFrom
      var cityTo = this.CityTo
      var dateFlight = this.DateFlight;
      var type = this.TicketType;
      var qtAdult = this.QTTadult;
      var query = {
        cityFrom: cityFrom,
        cityTo: cityTo,
        dateFlight: dateFlight,
        type: type,
        qtAdult: qtAdult,
      }
      var stringQuery = JSON.stringify(query)
      this.$router.push({name: "Search", query:{q: stringQuery}})
    },
    reverse(){
        this.$emit("call-reverse")
    }

  },


  

}



</script>

<template>
  <div id="main-body">
    
    <div class="cover">
    </div>
    <div class="body-img">
      <img class="img_main" src="https://i.pinimg.com/originals/20/d9/c9/20d9c9ccfee8b5892a145199e458fc79.gif" />
    </div>
    <div class="box">
      <div class="box-text">
        <div class="box-text-wrap">
          <div class="box-text1">
            <h2>Hãy đến đây và bay với chúng tôi!</h2>
          </div>
        </div>
        <div class="box-text2">
          <p>Hành trình đến vùng đất mới...</p>
        </div>
      </div>
      <div class="box-wrap">
        <div class="box-search">
          <h3>Tìm chuyến bay</h3>

          <div class="box-search_menu">
            <div class="box-search_menu--wrap">
              <div @click="popUpDestTakeOff()" class="search_menu-go">
                <div class="go-icon">
                  <font-awesome-icon :icon="['fas', 'plane-departure']" />
                </div>
                <div class="go-info">
                  <div class="go-info--tittle">
                    <h4>Thành phố khởi hành</h4>
                  </div>
                  <div class="go-info--city">
                    <p >{{ CityFrom }}</p>
                  </div>
                </div>
              </div>

              <div class="search_menu-btnreverse">
                <button @click="reverse()">
                  <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']" />
                </button>
              </div>

              <div @click="popUpSearchTakeOff()" class="search_menu-to">
                <div class="to-icon">
                  <font-awesome-icon :icon="['fas', 'plane-arrival']" />
                </div>
                <div class="to-info">
                  <div class="to-info--tittle">
                    <h4>Arrival city</h4>
                  </div>
                  <div class="to-info--city">
                    <p>{{ CityTo }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div @click="popUpCalender()" class="search_menu-calender">
              <div class="calender-icon">
                <font-awesome-icon :icon="['fas', 'calendar-alt']" />
              </div>
              <div class="calender-info">
                <div class="calender-info--tittle">
                  <h4 class="">Depature - Arrival</h4>
                </div>
                <div class="calender-info--city">
                  <p>{{ DateFlight.start }} - {{ DateFlight.end }}</p>
                </div>
              </div>
            </div>
            <div @click="popUpAdult()" class="search_menu-passenger">
              <div class="passenger-icon">
                <font-awesome-icon :icon="['fas', 'user-friends']" />
              </div>
              <div  class="passenger-info">
                <div class="passenger-info--tittle">
                  <h4>Passenger</h4>
                </div>
                <div  class="passenger-info--city">
                  <p>Hành khách</p>
                </div>
              </div>
            </div>

            <div @click="popUpTicket()" class="search_menu-ticket">
              <div class="passenger-icon">
                <font-awesome-icon :icon="['fas', 'ticket-alt']" />
              </div>
              <div class="ticket-info">
                <div class="ticket-info--tittle">
                  <h4>Ticket type</h4>
                </div>
                <div class="ticket-info--city">
                  <p>{{ TicketType }}</p>
                </div>
              </div>
            </div>
            <div class="search_menu-button">
              <button @click="search()">

                <div class="search_menu-button_warp">
                  <font-awesome-icon :icon="['fas', 'search']" />
                  <span>Tìm kiếm</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</template>
<style>
  @import url('../assets/home.css');



</style>
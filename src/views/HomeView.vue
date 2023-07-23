<script>
import LoginComponent from '../components/LoginComponent.vue'
import SignupComponent from '../components/SignUpComponent.vue'

export default{
  components:
  {
    LoginComponent,
    signup: SignupComponent
  } 
  

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
            <h2>Chào mừng bạn đến với bình nguyên vô tận</h2>
          </div>
        </div>
        <div class="box-text2">
          <p>Đã bay là phải rớt...</p>
        </div>
      </div>
      <div class="box-wrap">
        <div class="box-search">
          <h3>Tìm chuyến bay</h3>

          <div class="box-search_menu">
            <div class="box-search_menu--wrap">

              <div class="search_menu-go">
                <div class="go-icon">
                  <font-awesome-icon :icon="['fas', 'plane-departure']" />
                </div>
                <div class="go-info">
                  <div class="go-info--tittle">
                    <h4>Thành phố khởi hành</h4>
                  </div>
                  <div class="go-info--city">
                    <p>Thành phố Hồ Chí Minh - Viêt</p>
                  </div>
                </div>
              </div>

              <div class="search_menu-btnreverse">
                <button>
                  <font-awesome-icon :icon="['fas', 'exchange-alt']" />
                </button>
              </div>

              <div class="search_menu-to">
                <div class="to-icon">
                  <font-awesome-icon :icon="['fas', 'plane-arrival']" />
                </div>
                <div class="to-info">
                  <div class="to-info--tittle">
                    <h4>Arrival city</h4>
                  </div>
                  <div class="to-info--city">
                    <p>Abu Dhabi - UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="search_menu-calender">
              <div class="calender-icon">
                <font-awesome-icon :icon="['fas', 'calendar-alt']" />
              </div>
              <div class="calender-info">
                <div class="calender-info--tittle">
                  <h4>Depature - Arrival</h4>
                </div>
                <div class="calender-info--city">
                  <p>28 Feb - 3 Mar</p>
                </div>
              </div>
            </div>

            <div class="search_menu-passenger">
              <div class="passenger-icon">
                <font-awesome-icon :icon="['fas', 'user-friends']" />
              </div>
              <div class="passenger-info">
                <div class="passenger-info--tittle">
                  <h4>Passenger</h4>
                </div>
                <div class="passenger-info--city">
                  <p>1 Adult</p>
                </div>
              </div>
            </div>

            <div class="search_menu-ticket">
              <div class="passenger-icon">
                <font-awesome-icon :icon="['fas', 'ticket-alt']" />
              </div>
              <div class="ticket-info">
                <div class="ticket-info--tittle">
                  <h4>Ticket type</h4>
                </div>
                <div class="ticket-info--city">
                  <p>Economy</p>
                </div>
              </div>
            </div>
            <div class="search_menu-button">
              <button>
                <div class="search_menu-button_warp">
                  <font-awesome-icon :icon="['fas', 'search']" />
                  <span>Search</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="login_cover" >
    <LoginComponent></LoginComponent>
    <signup></signup>
  </div>

</template>
<style>
  @import url('../assets/home.css');

  .open_login{
      display: flex;
  }
  .login_cover{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60rem;
    background-color: #00000091;
    width: 100%;
    height: 1020px;
    position: relative;
    opacity: 1;
  }
</style>
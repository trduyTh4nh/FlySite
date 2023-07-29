import './assets/main.css'
import './assets/home.css'
import './assets/component.css'
import 'v-calendar/style.css';
import VCalendar from 'v-calendar';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { firebaseApp } from './helper'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBabyCarriage, faLandmarkAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons' 
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival, faCrown } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faXmark} from '@fortawesome/free-solid-svg-icons'
import { faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons'

import { faMinus, faPlus, faChild} from '@fortawesome/free-solid-svg-icons'
import { faUserFriends, faArrowRight, faCalendar, faTicket, faUser, faMagnifyingGlass, faTicketAlt, faSearch, faEye, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { VueFire } from 'vuefire'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarDays)
library.add(faTicketAlt, faSearch, faEye, faLandmarkAlt, faXmark)
library.add(faPhone, faCircleXmark, faArrowRightArrowLeft, faMinus, faPlus)
library.add(faShield, faChild, faBabyCarriage)
library.add(faShieldAlt)
library.add(faPlaneDeparture)
library.add(faPlaneArrival)
library.add(faExchangeAlt)
library.add(faCalendarAlt)
library.add(faUserFriends)
library.add(faArrowRight)
library.add(faCalendar)
library.add(faTicket)
library.add(faUser)
library.add(faMagnifyingGlass)
library.add(faCrown)
const app = createApp(App)

library.add(faShield)

app.use(VueTailwindDatepicker)

app.use(VueFire, {
    firebaseApp
})

app.use(VCalendar)
app.use(router)


app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
 

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
import { faLandmarkAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons' 
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faXmark} from '@fortawesome/free-solid-svg-icons'
import { faUserFriends, faTicketAlt, faSearch, faEye, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { VueFire } from 'vuefire'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

library.add(faTicketAlt, faSearch, faEye, faLandmarkAlt, faXmark)
library.add(faPhone, faCircleXmark)
library.add(faShield)
library.add(faShieldAlt)
library.add(faPlaneDeparture)
library.add(faPlaneArrival)
library.add(faExchangeAlt)
library.add(faCalendarAlt)
library.add(faUserFriends)


const app = createApp(App)

library.add(faShield)

app.use(VueTailwindDatepicker)

app.use(VueFire, {
    firebaseApp
})

app.use(VCalendar)
app.use(router)


app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
 

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLandmarkAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons' 
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends, faTicketAlt, faSearch } from '@fortawesome/free-solid-svg-icons'


library.add(faTicketAlt, faSearch)
library.add(faPhone)
library.add(faShield)
library.add(faShieldAlt)
library.add(faPlaneDeparture)
library.add(faPlaneArrival)
library.add(faExchangeAlt)
library.add(faCalendarAlt)
library.add(faUserFriends)

const app = createApp(App)


library.add(faShield)



app.use(router)


app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
 

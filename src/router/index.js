import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import History from '../views/HistoryView.vue'
import ScheduleView from '../views/SheduleView.vue'
import Passenger from '../views/PassengerView.vue'
import SearchResult  from '../views/ResultSearchView.vue'
import Book from '../views/BookView.vue'
import Admin from '../views/AdminView.vue'
import CompleteTicket from '../views/CompleteTicketView.vue'
import NotAllowed from '../views/NotAllowedView.vue'
import component from 'vue-tailwind-datepicker'
import DSCB from '../views/DSChuyenBayView.vue'
import BCDT from '../views/BCDTView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/passenger',
      name: 'passenger',
      component: Passenger
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchResult
    },
    {
      path: '/ticket/:ticket',
      name: 'Booking for ticket',
      component: Book
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/book/complete/:ticket',
      name: 'Completed',
      component: CompleteTicket
    },
    {
      path: '/forbidden',
      name: 'Không có quyền',
      component: NotAllowed
    },
    {
      path: '/admin/listcb',
      name: 'DSCB',
      component: DSCB
    },
    {
      path: '/admin/doanhthu',
      name: 'BCDT',
      component: BCDT
    }
    
  ]
})

export default router

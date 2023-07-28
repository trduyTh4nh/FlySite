import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import History from '../views/HistoryView.vue'
import ScheduleView from '../views/SheduleView.vue'
import Passenger from '../views/PassengerView.vue'
import SearchResult  from '../views/ResultSearchView.vue'
import Book from '../views/BookView.vue'
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
      path: '/ticket',
      name: 'Booking for ticket',
      component: Book
    }
    
  ]
})

export default router

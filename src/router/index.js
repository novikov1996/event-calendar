import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
//import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

/*let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}*/

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Calendar
    },
    //loginPage,
    registerPage
  ]
})

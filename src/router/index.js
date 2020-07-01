import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Error from '../views/Error.vue'
import Projects from '../views/Projects.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Error',    
    component: Error
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects

  }
]

const router = new VueRouter({
  routes
})

export default router

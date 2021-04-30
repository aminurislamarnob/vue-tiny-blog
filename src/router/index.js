import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import BlogDetails from '../views/BlogDetails.vue'
import AuthorArchive from '../views/AuthorArchive.vue'
import CategoryArchive from '../views/CategoryArchive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Home - Vue Tiny Blog Powered By WP REST API'
    }
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
    meta:{
      title: 'About Us - Vue Tiny Blog Powered By WP REST API'
    }
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact,
    meta:{
      title: 'Contact Us - Vue Tiny Blog Powered By WP REST API'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true,
    meta:{
      title: 'Blog Details - Vue Tiny Blog Powered By WP REST API'
    }
  },
  {
    path: '/author/:name/:id',
    name: 'AuthorArchive',
    component: AuthorArchive,
    props: true,
    meta:{
      title: 'Author Archive - Vue Tiny Blog Powered By WP REST API'
    }
  },
  {
    path: '/category/:name/:id',
    name: 'CategoryArchive',
    component: CategoryArchive,
    props: true,
    meta:{
      title: 'Category Archive - Vue Tiny Blog Powered By WP REST API'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return{
      x:0,
      y:0
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

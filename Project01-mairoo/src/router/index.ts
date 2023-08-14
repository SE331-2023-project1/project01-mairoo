import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import AdminView from '../views/AdminView.vue'
import Nprogress from 'nprogress'

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
      component: AboutView
    },
    {
      path: '/student',
      name: 'studentList',
      component: StudentView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/Admin',
      name: 'AdminDashboard',
      component: AdminView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    }
  ]
})

router.beforeEach(() => {
  Nprogress.start()
}),
  router.afterEach(() => {
    Nprogress.done()
  })
export default router

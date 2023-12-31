import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/student/StudentView.vue'
import AdminView from '../views/AdminView.vue'
import DoctorView from '../views/DoctorView.vue'
import PatientDetail from '@/views/patient/PatientDetailView.vue'
import PatientReccomend from '@/views/patient/PatientRecommendView.vue'
import PatientLayout from '@/views/patient/PatientLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import TeacherView from '../views/teacher/TeacherView.vue'
import TeacherDetailView from '../views/teacher/TeacherDetailView.vue'
import Nprogress from 'nprogress'
import StudentDetailView from '../views/student/StudentDetailView.vue'

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
      path: '/teacher',
      name: 'teacher',
      component: TeacherView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    //just for teacher detail view development
    {
      path: '/teacher/:id',
      name: 'teacher-detail',
      component: TeacherDetailView,
      props: true
    },
    {
      path: '/student',
      name: 'studentList',
      component: StudentView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/student/:id',
      name: 'student-detail',
      component: StudentDetailView,
      props: true
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/doctor',
      name: 'DoctorDashboard',
      component: DoctorView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/patient/:id',
      name: 'patient-layout',
      component: PatientLayout,
      props: true,
      children: [
        {
          path: '',
          name: 'patient-detail',
          component: PatientDetail,
          props: true
        },
        {
          path: 'recommend',
          name: 'patient-recommend',
          component: PatientReccomend,
          props: true
        }
      ]
    },

    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
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

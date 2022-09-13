import { createRouter, createWebHistory } from 'vue-router'

//Import Layouts
import FrontendLayout from '@/layouts/FrontendLayout.vue'
import BackendLayout from '@/layouts/BackendLayout.vue'

//Import Views
//Frontend
import HomeView from '@/views/frontend/HomeView.vue'
import AboutView from '@/views/frontend/AboutView.vue'
import PortfolioView from '@/views/frontend/PortfolioView.vue'
import ServiceView from '@/views/frontend/ServiceView.vue'
import ContactView from '@/views/frontend/ContactView.vue'
import RegisterView from '@/views/frontend/RegisterView.vue'
import LoginView from '@/views/frontend/LoginView.vue'
import ForgotPasswordView from '@/views/frontend/ForgotPasswordView.vue'
import NotFound404View from '@/views/frontend/NotFound404View.vue'


//Backend
import DashboardView from '@/views/backend/DashboardView.vue'
import ProductsView from '@/views/backend/ProductsView.vue'

const routes = [
  /**Frontend route*/
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: HomeView
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component : FrontendLayout,
    children: [
      {
        path: '',
        component: AboutView
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: PortfolioView
      }
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดผลงานของเรา'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: ServiceView
      }
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: ContactView
      }
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: RegisterView
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'หน้ารายละเอียดสมัครสมาชิกใหม่'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: LoginView
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'หน้ารายละเอียดเข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: ForgotPasswordView
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'หน้ารายละเอียดลืมรหัสผ่าน'
    }
  },

  /**Backend route*/
  {
    path: '/backend',
    name: 'Dashboard',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: DashboardView
      }
    ],
    meta: {
      title: 'Dashboard',
      description: 'หน้ารายละเอียด Dashboard'
    }
  },
  {
    path: '/backend/products',
    name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: ProductsView
      }
    ],
    meta: {
      title: 'Products'
    }
  },

  //Error 404

  {
    path: "/:catchAll(.*)",
    component: NotFound404View,
    meta: {
      title: 'ไม่พบข้อมูล',
      description: 'หน้าไม่พบข้อมูล'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

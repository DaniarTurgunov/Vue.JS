import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/Page/MainPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/Page/OurProject.vue')
  },
  {
    path: '/project/:page',
    name: 'projectArticle',
    component: () => import('@/Page/OurProject.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/Page/BlogPage.vue')
  },
  {
    path: '/blog/:page',
    name: 'blogArticle',
    component: () => import('@/Page/BlogPage.vue')
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: () => import('@/Page/ProjectDetails.vue')
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import('@/Page/BlogDetailsPage.vue')
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: () => import('@/Page/NotFoundPage.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
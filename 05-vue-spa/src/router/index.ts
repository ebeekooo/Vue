import HomePage from '@/modules/landing/pages/homePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/landingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/featuresPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/pricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/contactPage.vue'),
        },
      ],
    },
    //Auth
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/authLayout.vue'),
      children: [
        {
          path: '/login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/register',
          component: () => import('@/modules/auth/pages/registerPage.vue'),
        },
      ],
    },
  ],
});
export default router;

import NotFound404 from '@/modules/common/pages/notFound404.vue';
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',

          props: (route) => {
            const id = Number(route.params.id);

            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/pokemonPage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/modules/auth/layouts/authLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/registerPage.vue'),
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});
export default router;

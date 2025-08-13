import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

//
// createWebHashHistory // con este las rutas quedan como /#/home, /#/login, etc
// createWebHistory // con este las rutas quedan como /home, /login, etc

/*
========= APUNTES =========
const router = useRouter() Es para usar el objt router para redirecionar a otras rutas
const route = useRoute() es para optener sobre la ruta

*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing Page
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layaouts/LandingLayaout.vue'),
      children: [
        { path: '/', name: 'home', component: HomePage },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPages.vue'),
        },
        {
          path: '/princing',
          name: 'princing',
          component: () => import('@/modules/landing/pages/PrincingPage.vue'),
        },
        {
          path: '/contact', //http://localhost:5173/register
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard], // Guard para verificar si el usuario está autenticado antes de acceder a esta ruta
          // props: true, // props es true para que se pase el id como props al componente
          props: (route) => {
            // console.log(route);
            // const id = +route.params.id; // +route.params.id convierte el id a un numero
            const id = Number(route.params.id); // Number(route.params.id) convierte el id a un numero
            console.log(id);
            return isNaN(id) ? { id: 1 } : { id }; // isNaN es para verificar si el id es un numero o no
          },
          component: () => import('@/modules/pokemons/pages/PokemonsPage.vue'),
        },
      ],
    },

    // Auth Pages
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register', //http://localhost:5173/auth/register
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    },
  ],
});

export default router;

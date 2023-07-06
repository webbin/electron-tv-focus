import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import HomeView from '../views/';
import MoviesView from '../views/MoviesView.vue';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/home',
      // name: 'home',
      component: HomePage,
      children: [
        {
          path: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'index',
          component: HomeView,
        }
      ]
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    }
  ]
});

export default router;

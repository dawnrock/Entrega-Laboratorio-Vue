import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/usersList/:id',
    component: () => import('../views/Details.vue'),
    name: 'UsersList',
  },
  {
    path: '/detailUser/:id',
    component: () => import('../views/DetailsUser.vue'),
    name: 'DetailUser',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

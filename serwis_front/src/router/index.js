import { createRouter, createWebHistory } from 'vue-router';
import CategoView from '../components/CategoView.vue';
import FuturisticView from '../components/FuturisticView.vue';
import ProfileView from '../components/ProfileView.vue';
import LoginView from '../components/LoginView.vue';
import SedanView from '../components/SedanView.vue';
import SportView from '../components/SportView.vue';
import MuscleView from '../components/MuscleView.vue';
import CmuscleView from '../components/CmuscleView.vue';
import SuvView from '../components/SuvView.vue';
import ClassicView from '../components/ClassicView.vue';
import HomeView from '../components/HomeView.vue';
import CarDetails from '../components/CarDetails.vue';
import CartView from '../components/CartView.vue';
import CabrioView from '../components/CabrioView.vue';

const routes = [
  {
    path: '/cat',
    name: 'car',
    component: CategoView,
    meta: { requiresAuth: true },
  },
  {
    path: '/future',
    name: 'future',
    component: FuturisticView,
    meta: { requiresAuth: true },
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/sedan',
    name: 'sedan',
    component: SedanView,
    meta: { requiresAuth: true },
  },
  {
    path: '/sport',
    name: 'sport',
    component: SportView,
    meta: { requiresAuth: true },
  },
  {
    path: '/muscle',
    name: 'muscle',
    component: MuscleView,
    meta: { requiresAuth: true },
  },
  {
    path: '/cmuscle',
    name: 'cmuscle',
    component: CmuscleView,
    meta: { requiresAuth: true },
  },
  {
    path: '/suv',
    name: 'suv',
    component: SuvView,
    meta: { requiresAuth: true },
  },
  {
    path: '/classic',
    name: 'classic',
    component: ClassicView,
    meta: { requiresAuth: true },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/car-details/:carId',
    name: 'carDetails',
    component: CarDetails,
    meta: { requiresAuth: true },
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: { requiresAuth: true },
  },
  {
    path: '/cabrio',
    name: 'cabrio',
    component: CabrioView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;

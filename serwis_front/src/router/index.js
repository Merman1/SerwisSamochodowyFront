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
import HomeView from '../components/HomeView.vue'
import CarDetails from '../components/CarDetails.vue'
import CartView from '../components/CartView.vue'

const routes = [
  {
    path: '/cat',
    name: 'car',
    component: CategoView,
  },
  {
    path: '/future',
    name: 'future',
    component: FuturisticView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfileView,
    meta: { requiresAuth: true }, // Dodaj meta, aby sprawdzić autentykację
  
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sedan',
    name: 'sedan',
    component: SedanView
  },
  {
    path: '/sport',
    name: 'sport',
    component: SportView
  },
  {
    path: '/muscle',
    name: 'muscle',
    component: MuscleView
  },
  {
    path: '/cmuscle',
    name: 'cmuscle',
    component: CmuscleView
  },
  {
    path: '/suv',
    name: 'suv',
    component: SuvView
  },
  {
    path: '/classic',
    name: 'classic',
    component: ClassicView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/car-details/:carId', // Tutaj używamy dynamicznego parametru carId
    name: 'carDetails',
    component: CarDetails,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

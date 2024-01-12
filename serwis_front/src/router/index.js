import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import FuturisticView from '../components/FuturisticView.vue';
import ProfileView from '../components/ProfileView.vue';
import LoginView from '../components/LoginView.vue';
import SedanView from '../components/SedanView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/future',
    name: 'future',
    component: FuturisticView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfileView
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
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

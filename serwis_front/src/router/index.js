import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import FuturisticView from '../components/FuturisticView.vue';
import ProfileView from '../components/ProfileView.vue';
import LoginView from '../components/LoginView.vue';
import SedanView from '../components/SedanView.vue';
import SportView from '../components/SportView.vue';
import MuscleView from '../components/MuscleView.vue';
import CmuscleView from '../components/CmuscleView.vue';
import SuvView from '../components/SuvView.vue';
import ClassicView from '../components/ClassicView.vue';



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
  }

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

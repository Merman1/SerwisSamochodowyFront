<template>
  <div class="choice-dialog">
    <p>Wybierz:</p>
    <router-link style="text-decoration: none; padding: 2px; color: inherit;" to="/profil" replace>Profil</router-link>
    <router-link style="text-decoration: none; padding: 2px;color: inherit;" to="/home" replace>Home</router-link>
    <router-link style="text-decoration: none; padding: 2px;color: inherit;" to="/cart" replace>Cart</router-link><br>
    <button @click="logout">Wyloguj</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CartView from './CartView.vue';
import ProfileView from './ProfileView.vue';
import axios from 'axios';
import HomeView from './HomeView.vue';
const routes = [
  { path: '/profil', component: ProfileView },
  { path: '/cart', component: CartView },
  { path: '/home', component: HomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const accessToken = ref(localStorage.getItem('token') || null);

const baseURL = "http://localhost:8000"; 
const logout = async () => {
  localStorage.removeItem('accessToken');
  accessToken.value = null;
  try {
    const response = await axios.get(`${baseURL}/api/auth/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken.value}`
      }
    });

    if (response.ok) {
      console.log('User logged out successfully!');
    } else {
      console.error('Error during logout:', response.statusText);
    }
  } catch (error) {
    console.error('Error during logout:', error.message);
  }

  localStorage.removeItem('accessToken');

  router.push('/login');
};

</script>

<style scoped>
.choice-dialog {
  position: absolute;
  background-color: #dc143c;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.choice-dialog button {
  background-color: black;
  color: white;
}
</style>

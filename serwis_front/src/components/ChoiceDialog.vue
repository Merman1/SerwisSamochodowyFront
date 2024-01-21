<template>
  <div class="choice-dialog">
    <p>Wybierz:</p>

    <button @click="goTo('/profil')">Profil</button>
    <button @click="logout">Wyloguj</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const accessToken = ref(localStorage.getItem('token') || null);

const goTo = (route) => {
  router.push(route);
};

const logout = async () => {
  // Czyszczenie tokenu dostępu i maila przy wylogowywaniu
  localStorage.removeItem('accessToken');


  accessToken.value = null;

  try {
    // Wywołanie backendowego endpointu do wylogowywania
    const response = await fetch('http://localhost:8080/api/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Dodaj token do nagłówka, jeśli go masz
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

  // Przekierowanie użytkownika na stronę logowania
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

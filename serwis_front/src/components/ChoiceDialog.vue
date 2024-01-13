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

const accessToken = ref(null);
const userEmail = ref(null);

const goTo = (route) => {
  router.push(route);
};

const logout = () => {
  // Czyszczenie tokenu dostępu i maila przy wylogowywaniu
  accessToken.value = null;
  userEmail.value = null;

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

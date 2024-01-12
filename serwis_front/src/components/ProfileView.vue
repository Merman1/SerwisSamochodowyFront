



<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';



const showChoiceDialog = ref(false);

const openChoiceDialog = () => {
  showChoiceDialog.value = true;
};
</script>
<template>
          
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
  </head>
  
  <body>
      <div class="slider" >
        <router-view @authenticated="setAuthenticated">
        
          <div id="nav">
            <div class="menu">
    <img src="../assets/menu.png" alt="" @click="openChoiceDialog" />
    <choice-dialog v-if="showChoiceDialog" />
  </div>
          </div>
        </router-view>
      </div>
  <div class="links">
    <router-link style="text-decoration: none; color: inherit;"  to="/home" replace><h3>HOME</h3></router-link><br>
    <router-link style="text-decoration: none; color: inherit;"  to="/future" replace><h3>FUTURISTIC</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><h3>SPORT</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><H3>MUSCLE</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><H3>CLASSIC MUSCLE</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><h3>SUV</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><H3>SEDAN</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="" replace><H3>CLASSIC</H3></router-link>
  </div>
      <div class="background">
        <div class="sidebar">
        <h2>Edytowanie profilu</h2>
        <!-- Filtry -->
        <label for="Imie">Imie</label>
        <input type="text" id="Imie" v-model="Imie" />

        <label for="Nazwisko">Nazwisko</label>
        <input type="text" id="NAzwisko" v-model="Nazwisko" />

        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="Email" />

        <label for="Haslo">Hasło</label>
        <input type="text" id="Haslo" v-model="Haslo" />

        <label for="Adres">Adres</label>
        <input type="number" id="Adres" v-model="Adres" />

        <label for="Telefon">Telefon</label>
        <input type="number" id="Telefon" v-model="Telefon" />

        <label for="Ulubione">Ulubione</label>
        <input type="number" id="Ulubione" v-model="Ulubione" />
       <br>

        <button @click="applyFilters">Edytuj</button>
        
        <button @click="applyFilters">Anuluj</button>
        </div>
        <div class="boxes">
  <div class="row">
    <router-view>
      <div class="col-lg-6">
        <div class="item">
          <div class="profile-info">
            <h1>Profil</h1>
            <br>
            <div class="profile-details">
              <div class="profile-detail">
                <label for="brand">Imie:</label>
                <p>Jarosław</p>
              </div>
              <div class="profile-detail">
                <label for="model">Nazwisko:</label>
                <p>Kot</p>
              </div>
              <div class="profile-detail">
                <label for="generation">Adres:</label>
                <p>Wierna Rzeka</p>
              </div>
              <div class="profile-detail">
                <label for="generation">Email:</label>
                <p>jarek@gmail.pl</p>
              </div>
              <div class="profile-detail">
                <label for="generation">Telefon:</label>
                <p>12345678</p>
              </div>
              <div class="profile-detail">
                <label for="generation">Ulubiony rodzaj pojazdu:</label>
                <p>Futuristic</p>
              </div>
              <!-- Add similar blocks for other profile details -->
            </div>
          </div>
        </div>
      </div>
    </router-view>
  </div>
</div>



</div>
<footer class="text-center text-lg-start" style="background-color: #000000;">
      <div class="container d-flex justify-content-center py-5">
      </div>
      <!-- Copyright -->
      <div class="text-center text-white p-3" style="background-color: #dc143c;">
        © 2023 Copyright:
        <a class="text-white" href="">MiraiArashi.com</a>
      </div>
      <!-- Copyright -->
    </footer>

</body>
          
        </template>
<style scoped>
    
    body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden; 
}
.links{
  display: flex;
  width: 100%;
  height: 50px;
  background-color: black;
  text-decoration: none;
 
}
.links h3{
  color:red;
  font-size: 25px;
  padding:0px;
  text-align: center;
  margin-left: 100px;
  text-decoration: none;
  margin-top: 10px;
}
/* Slider styles */
.slider {
  background-image: url('~@/assets/MiraiArashi2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  position: relative;
  height: 45vh;
  margin: 0; 
  padding: 0;
  overflow: hidden;
}
  .slider h1 {
    color: #ff0000;
    font-size: 150px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0px 2px #000000;
  }

  .slider .menu {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
   bottom:85%;
    left: 95%;
    transform: translateX(-50%);
    justify-content: center;
    width: 50%;
  }

  .slider .menu a {
    color: #ff0000;
    font-size: 30px;
    font-weight: bold;
    margin-right: 40px;
    text-decoration: none;
    text-shadow: 0px 4px #000000;
  }

  .slider .menu a:first-child {
    margin-left: 40px;
  }

  .menu a:hover {
    color: darkgreen;
  }

  .menu a:active {
    color: rgb(4, 41, 4);
  }

  /* Boxes styles */
  .sidebar {
  float: left;
  background-color: #dc143c;
  width: 20%;
  height: 67.1vw;
  margin-top: 30px;
  padding: 20px;
  color: white;
}

/* Stylizacja dla formularza filtrów */
.sidebar form {
  display: flex;
  flex-direction: column;
  float:right;
}

.sidebar label {
  margin-top: 10px;
  font-weight: bold;
  float:left;
}

.sidebar input,
.sidebar button {
  margin-top: 5px;
  padding: 8px;
  font-size: 14px;
  float:right;
}

.sidebar button {
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  float:right;
  margin-top: 50px;
}
  .background {
    background-color: #000000;
    height: 1200px;
    width: 100%;
  }

  .boxes {
    width: 100%;
    padding: 0 30px;
    padding-top: 30px;
  }

  .boxes .item {
    margin-bottom: 30px;
    float: left;
  }

  .boxes .item h2 {
    background-color: #dc143c;
    color: white;
    padding: 20px;
    width: auto;
    font-size: 24px;
    font-weight: bold;
    text-align: left;

  }
  .boxes .item button{
background-color: black;
color:white;
  }
  

  .photo {
    position: relative;
    overflow: hidden;
    padding-top: 100%;
  }

  .photo img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Footer styles */
  footer {
    background-color: #000000;
  }

  footer a {
    color: white;
  }

  footer a:hover {
    color: #8B0000;
  }
  p{
    color:white;
    font-size: 40px;
  }

  /* Container styles */
  .container {
    width: 50%;
    height: 100%;
  }

  .profile-info {
    background-color: #dc143c;
    color: white;
    padding: 20px;
    width: 500px;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    border-radius: 10px;
  }

  .profile-details {
    display: flex;
    flex-direction: column;
  }

  .profile-detail {
    margin-bottom: 15px;
  }

  .profile-detail label {
    font-weight: bold;
    margin-right: 10px;
  }

  .profile-detail p {
    margin: 0;
    font-size: 18px;
  }
</style>
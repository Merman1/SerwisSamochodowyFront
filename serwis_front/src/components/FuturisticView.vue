
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';


import ChoiceDialog from "@/components/ChoiceDialog.vue";

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
        <h2>Filtry</h2>
        <!-- Filtry -->
        <label for="brand">Marka pojazdu</label>
        <input type="text" id="brand" v-model="brand" />

        <label for="model">Model pojazdu</label>
        <input type="text" id="model" v-model="model" />

        <label for="generation">Generacja</label>
        <input type="text" id="generation" v-model="generation" />

        <label for="bodyType">Typ nadwozia</label>
        <input type="text" id="bodyType" v-model="bodyType" />

        <label for="priceFrom">Cena od</label>
        <input type="number" id="priceFrom" v-model="priceFrom" />

        <label for="priceTo">Cena do</label>
        <input type="number" id="priceTo" v-model="priceTo" />

        <label for="yearFrom">Rok produkcji od</label>
        <input type="number" id="yearFrom" v-model="yearFrom" />

        <label for="yearTo">Rok produkcji do</label>
        <input type="number" id="yearTo" v-model="yearTo" />

        <label for="fuelType">Rodzaj paliwa</label>
        <input type="text" id="fuelType" v-model="fuelType" />

        <label for="mileageFrom">Przebieg od</label>
        <input type="number" id="mileageFrom" v-model="mileageFrom" />

        <label for="mileageTo">Przebieg do</label>
        <input type="number" id="mileageTo" v-model="mileageTo" />

        <label for="location">Lokalizacja</label>
        <input type="text" id="location" v-model="location" />

        <label for="damage">Stan uszkodzeń</label>
        <input type="text" id="damage" v-model="damage" />

        <label for="details">Wpisz model, wersję lub inne szczegóły</label>
        <input type="text" id="details" v-model="details" />

        <label for="financing">Możliwość finansowania</label>
        <input type="checkbox" id="financing" v-model="financing" />

        <label for="specialPrograms">Programy specjalne</label>
        <input type="checkbox" id="specialPrograms" v-model="specialPrograms" />

        <button @click="applyFilters">Wyszukaj</button>
        </div>
        <div class="boxes">
          <div class="row">
        
                      <router-view>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/car.png" alt="">
                              </div>
                              <router-link to="" replace></router-link>
                              <h2>Marka: Peugeot<br>
                              Model: Inception
                              Rok produkcji: 2023<br>
                              Moc silnika: 566 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 2 600 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                              
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/fiat.jpg" alt="">
                              </div>
                              <router-link   to="" replace></router-link>
                              <h2>Marka: Fiat<br>
                              Model: 126p
                              Rok produkcji: 2023<br>
                              Moc silnika: 106 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 45 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/tesla.jpg" alt="">
                              </div>
                              <router-link   to="" replace> </router-link>
                              <h2>Marka: Tesla<br>
                              Model: Cybertruck<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 766 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 1 750 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/nissan.png" alt="">
                              </div>
                              <router-link   to="" replace></router-link>
                              <h2>Marka: Nissan<br>
                              Model:HYPER FORCE<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 896 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 4 200 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/merc.jpg" alt="">
                              </div>
                              <router-link to="" replace></router-link>
                              <h2>Marka: Mercedes<br>
                              Model: Vision AVTR<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 744 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 1 800 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                              
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/lincoln.jpg" alt="">
                              </div>
                              <router-link   to="" replace></router-link>
                              <h2>Marka: Ford<br>
                              Model: Lincoln<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 589 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 2 150 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/cupra.jpg" alt="">
                              </div>
                              <router-link   to="" replace> </router-link>
                              <h2>Marka: Cupra<br>
                              Model: Darkrebel<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 1020 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 8 900 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/nissa.jpg" alt="">
                              </div>
                              <router-link   to="" replace></router-link>
                              <h2>Marka: Nissan<br>
                              Model:HYPER<br>
                              Rok produkcji: 2023<br>
                              Moc silnika: 666 kW<br>
                              Klimatyzacja: Yes<br>
                              Cena: 1 730 000 USD <br>
                              <button><h1> Buy now!</h1></button></h2>
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
    height: auto;
    width: 100%;
  }

  .boxes {
    width: 100%;
    padding: 0 30px;
    padding-top: 30px;
  }

  .boxes .item {
    margin-bottom: 30px;
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

  /* Container styles */
  .container {
    width: 50%;
    height: 100%;
  }

</style>
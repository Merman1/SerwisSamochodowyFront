<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';
import ChoiceDialog from "@/components/ChoiceDialog.vue";
import CarDetails from "@/components/CarDetails.vue";

const showChoiceDialog = ref(false);

const showCarDetails = ref(false);

const openChoiceDialog = () => {
  showChoiceDialog.value = true;
};

const openCarDetails = (car) => {
  showCarDetails.value = car;
  addCarToRecentlyViewed(car.id);
  
};

const closeCarDetails = () => {
  showCarDetails.value = false;
};
const baseURL = "http://localhost:8000";
const addCarToRecentlyViewed = async (carId) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      `${baseURL}/api/auth/recently-viewed/add/${carId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Car added to Recently Viewed successfully!");
  } catch (error) {
    console.error("Failed to add car to Recently Viewed", error);
  }
};

</script>

<script>
import axios from 'axios';

export default {
  
  name: "CabrioView",

  data() {
    return {
      baseURL: "http://localhost:8000",
      selectedCar: null,
      marka: '',
      model:'',
      rok:'',
      moc_silnika: '',
      cena:'',
      opis:'',
      dostepny:'',
      obraz:'',
      klimatyzacja:'',
      typ:'cabrio',
      cars:[],
      filteredCars: [],
    };
  },

  methods: {
  async getAllCars() {
    try {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        
        const response = await axios.get(`${this.baseURL}/api/auth/cars`, {
          timeout: 30000,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        this.cars = response.data.map(car => {
      return {
        ...car,
        obraz: car.obraz 
      };
    });

        this.applyFilters();
    } catch (error) {
        console.error("Failed to fetch cars", error);
    }
},

    checkAuthentication() {
      const token = localStorage.getItem("token");
      if (!token) {
  
        this.$router.push("/login");
      } else {
        this.getAllCars();
      }
    },

    applyFilters() {
      if (
        this.marka === '' &&
        this.model === '' &&
        this.rok === '' &&
        this.cena === '' &&
        this.typ === ''
      ) {
        this.filteredCars = [];
      } else {
        this.filteredCars = this.cars.filter(car =>
          car.marka.toLowerCase().includes(this.marka.toLowerCase()) &&
          car.model.toLowerCase().includes(this.model.toLowerCase()) &&
          car.rok.toString().includes(this.rok) &&
          car.cena.toString().includes(this.cena) &&
          (this.typ === '' || car.typ.toLowerCase() === this.typ.toLowerCase()) 
        );
      }
    },
  },

  mounted() {
    this.checkAuthentication();
    this.getAllCars();
  },

  watch: {
    marka: 'applyFilters',
    model: 'applyFilters',
    rok: 'applyFilters',
    cena: 'applyFilters',
    typ: 'applyFilters'
  },

};

</script>
<style scoped>

</style>
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
    <div class="slider" @click="handleSliderClick">
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
    <router-link style="text-decoration: none; color: inherit;"  to="/cat" replace><h3>CATEGORY</h3></router-link><br>
    <router-link style="text-decoration: none; color: inherit;"  to="/future" replace><h3>FUTURISTIC</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/sport" replace><h3>SPORT</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/muscle" replace><H3>MUSCLE</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/cmuscle" replace><H3>CLASSIC MUSCLE</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/suv" replace><h3>SUV</h3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/sedan" replace><H3>SEDAN</H3></router-link>
    <router-link style="text-decoration: none; color: inherit;"  to="/classic" replace><H3>CLASSIC</H3></router-link>
  </div>
      <div class="background">
        <div class="sidebar">
      <h2>Filtry</h2>
      <div class="filter-item">
        <label for="marka">Marka pojazdu</label>
        <input type="text" id="marka" v-model="marka" /><br>
        <label for="model">Model pojazdu</label>
        <input type="text" id="model" v-model="model" /><br>
        <label for="cena">Cena</label>
        <input type="number" id="cena" v-model="cena" /><br>
        <label for="rok">Rok </label>
        <input type="number" id="rok" v-model="rok" />
        </div>
        </div>
        <div class="boxes">
            <div class="row" v-for="car in (filteredCars.length > 0 ? filteredCars : cars)" :key="car.id" style=" display: inline-block; width: 18%; margin: 5px 5px 5px 5px;">
                      <router-view>
                      <div>
                          <div class="item">
                            <div class="photo">
                              <img :src="'data:image/jpeg;base64,' + car.obraz" alt="Car Photo" />

            </div>
                              <router-link to="" replace></router-link>
                            
                            <h2>  Marka: {{ car.marka }}<br>
                              Model: {{ car.model }}<br>
                              Rok produkcji: {{ car.rok }}<br>
                              Moc silnika: {{ car.moc_silnika }}<br>
                              Klimatyzacja: {{ car.klimatyzacja }}<br>
                              Cena:{{ car.cena }} <br>
                              Typ: {{ car.typ }}<br>
                              <button @click="openCarDetails(car)"><h1> Zobacz!</h1></button>
                              <car-details v-if="showCarDetails === car" :car="car" @close="closeCarDetails" /></h2>                              
                          </div>
                      </div>
                      </router-view>           
                  </div>                  
              </div>

</div>
<footer class="text-center text-lg-start" style="background-color: #000000;">
      <div class="container d-flex justify-content-center py-5">
      </div>
      <div class="text-center text-white p-3" style="background-color: #dc143c;">
        © 2023 Copyright:
        <a class="text-white" href="">MiraiArashi.com</a>  
      </div>
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
  padding-right: 80px;
 
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

  .sidebar {
  float: left;
  background-color: #dc143c;
  width: 20%;
  height: 680px;
  margin-top: 30px;
  padding: 20px;
  color: white;
}

.filter-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.sidebar form {
  display: flex;
  flex-direction: column;
  float: right;
}

.sidebar label {
  margin-top: 10px;
  font-weight: bold;
  padding: 8px;
  float: left;
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
  float: right;
  margin-top: 20px;
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

  footer {
    background-color: #000000;
  }

  footer a {
    color: white;
  }

  footer a:hover {
    color: #8B0000;
  }

  .container {
    width: 50%;
    height: 100%;
  }

</style>
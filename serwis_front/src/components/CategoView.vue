<script setup>
import { RouterLink, RouterView } from "vue-router";
import ChoiceDialog from "@/components/ChoiceDialog.vue";
import { ref } from 'vue';

const showChoiceDialog = ref(false);

const openChoiceDialog = () => {
  showChoiceDialog.value = true;
};

</script>
<script>
export default {
  data() {
    return {
      authorized: false,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    this.authorized = !!token; 
  },
}
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
 
    <div class="slider" @click="$router.push('/home')">
        
          <div id="nav">
            <div class="menu">
    <img src="../assets/menu.png" alt="" @click="openChoiceDialog" />
    <choice-dialog v-if="showChoiceDialog" />
  </div>
  
          </div>
      
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
    <router-link style="text-decoration: none; color: inherit;"  to="/cabrio" replace><H3>CABRIO</H3></router-link>
  </div>
      <div class="background">
        <div class="boxes">
          <div class="row">
        
                      <router-view>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Future.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/future" replace><h2>Futuristic</h2></router-link>
                              
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Sport.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/sport" replace><h2>Sport</h2></router-link>
                              
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Muscle.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/muscle" replace><h2>Muscle</h2></router-link>
                            
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Suv.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/suv" replace><h2>Suv</h2></router-link>
                          </div>
                      </div>                     
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Classic_muscle.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/cmuscle" replace><h2>Classic Muscle</h2></router-link>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Sedan.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/sedan" replace><h2>Sedan</h2></router-link>

                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Cabrio.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/cabrio" replace><h2>Cabrio</h2></router-link>
                          </div>
                        
                      </div>   
                      <div class="col-lg-3">
                          <div class="item">
                              <div class="photo">
                                  <img src="../assets/Classic.jpg" alt="">
                              </div>
                              <router-link style="text-decoration: none; color: inherit;" to="/classic" replace><h2>Classic</h2></router-link>
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
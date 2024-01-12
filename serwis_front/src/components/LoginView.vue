<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
    try {
        const response = await axios.post("/api/auth/signin", {
            username: this.username,
            password: this.password,
        });

        const token = response.data.accessToken; // Poprawiona linia, aby uzyskać token
        console.log('Received token:', token);
        localStorage.setItem("token", token);
        console.log('Token from localStorage:', token);
        this.$router.push("/home");
    } catch (error) {
        console.error("Login failed", error);
    }
},
  },
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
  
      </div>
  
      <div class="background">
        
         <div class="login-container">
                    <h2>Login</h2>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" v-model="username" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" v-model="password" required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
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
.login-container {
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  height: 500px;
}

/* Update the styles for input fields */
.login-container input {
  background-color: white;
  color: black;
  border: 2px solid red; /* Red border for input fields */
  border-radius: 5px;
  padding: 20px;
  margin: 5px;
}

/* Update the styles for the login button */
.login-container button {
  background-color: red; /* Red background color for the button */
  color: white;
  border: 2px solid red; /* Red border for the button */
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
/* Update the styles for the login label */
.login-container h2 {
  font-size: 36px; /* Larger font size */
  color: red; /* Red color for the label */
  text-shadow: 0px 0px 10px red; /* Red glow effect */
}
/* Add hover effect for the button */
.login-container button:hover {
  background-color: darkred; /* Darker red on hover */
  border-color: darkred;
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
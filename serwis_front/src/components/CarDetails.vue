
<template>
   <div class="car-details" v-if="car">
      <p>{{ car.marka }} {{ car.model }}</p>
  <car-details-dialog
      v-if="showCarDetails"
      :car="car"
      @purchase-success="handlePurchaseSuccess"
    @purchase-error="handlePurchaseError"
      @close="closeCarDetails"/>
 

                            
                            <h2>  Marka: {{ car.marka }}<br>
                              Model: {{ car.model }}<br>
                              Rok produkcji: {{ car.rok }}<br>
                              Moc silnika: {{ car.moc_silnika }}<br>
                              Klimatyzacja: {{ car.klimatyzacja }}<br>
                              Cena:{{ car.cena }} <br>
                              Typ: {{ car.typ }}<br>
                              <br>
                              <button @click="buyCar"><h1> Kup teraz!</h1></button></h2>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  props: {
  car: Object,
  baseURL: String
},
  data() {
    return {
 
    };
  },
  methods: {
    async buyCar() {
  try {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    if (this.car && this.car.id) {
      const userId = localStorage.getItem("userId");
      await axios.post(`/api/auth/cars/buy/${this.car.id}`, { userId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const purchasedCars = JSON.parse(localStorage.getItem('purchasedCars')) || [];
      purchasedCars.push(this.car);
      localStorage.setItem('purchasedCars', JSON.stringify(purchasedCars));
      this.$router.push('/cart');
    } else {
      console.error("Błąd zakupu samochodu: Brak identyfikatora samochodu");
      this.$emit("purchase-error");
    }
  } catch (error) {
    console.error("Błąd zakupu samochodu", error);
    this.$emit("purchase-error");
  }
}, mounted() {
    const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);
  },
    handlePurchaseSuccess() {
      console.log("Pomyślny zakup samochodu");
    },
    handlePurchaseError() {
      console.error("Błąd zakupu samochodu");
    },
  },
};

</script>

<style scoped>
.car-details {
  position: absolute;
  background-color: #dc143c;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 70%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  border: 2px solid white; 
}
.car-details p{
  font-size: 90px;
  width: 1500px;
  height: 20%;
  background-color: black;
  
}
.info {
  flex: 1;
  padding-right: 20px;
}

.photo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding-right: 310px;
  padding-top: 288px;
}

.car-details h2 {
  position: absolute;
  background-color: black;
  top: 61.5%;
  left: 21.8%;
  height: 70%;
  width: 40%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.car-details button {
  background-color: black;
  color: white;
}
</style>

<template>
   <div class="car-details" v-if="car">
      <p>{{ car.marka }} {{ car.model }}</p>
  <car-details-dialog
      v-if="showCarDetails"
      :car="car"
      @purchase-success="handlePurchaseSuccess"
    @purchase-error="handlePurchaseError"
      @close="closeCarDetails"/>
      <div class="photo" v-if="car.obraz">
                              <img :src="'data:image/jpeg;base64,' + car.obraz" alt="Car Photo" />

            </div>

                            
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
  },
  data() {
    return {
      baseURL: "http://localhost:8000",
 
    };
  },
  methods: {
    async buyCar() {
      try {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);

        // Upewnij się, że this.car.id jest zdefiniowane
        if (this.car && this.car.id) {
          // Wywołaj funkcję zakupu na backendzie, przekazując id samochodu
          await axios.post(`/api/auth/cars/buy/${this.car.id}`, null, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
            // Dodaj zakupiony samochód do local storage
    const purchasedCars = JSON.parse(localStorage.getItem('purchasedCars')) || [];
    purchasedCars.push(this.car);
    localStorage.setItem('purchasedCars', JSON.stringify(purchasedCars));


    this.$router.push('/cart');
        } else {
          console.error("Błąd zakupu samochodu: Brak identyfikatora samochodu");
          // Tutaj możesz obsłużyć błąd braku identyfikatora samochodu
          this.$emit("purchase-error");
        }
      } catch (error) {
        // Tutaj możesz obsłużyć błędy związane z zakupem
        console.error("Błąd zakupu samochodu", error);
        // Tutaj możesz wyświetlić powiadomienie o błędzie zakupu
        this.$emit("purchase-error");
      }
    },

    handlePurchaseSuccess() {
      // Tutaj możesz obsłużyć zdarzenie pomyślnego zakupu
      console.log("Pomyślny zakup samochodu");
    },
    handlePurchaseError() {
      // Tutaj możesz obsłużyć zdarzenie błędu zakupu
      console.error("Błąd zakupu samochodu");
    },
    // Inne metody komponentu
  
    
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
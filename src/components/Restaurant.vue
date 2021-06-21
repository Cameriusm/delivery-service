<template>
  <div class="restaurant">
    <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->
    <!-- <h1>Главная страница</h1> -->
    <div class="restaurant-option">
      <h1>Введите ссылку на Ресторан, {{name}} {{id}}:</h1>
      <form class="form" @submit.prevent="restaurantHrefConfirm">
        <div class="restaurant-option-checkboxes">
          <input
            type="text"
            placeholder="Ссылка"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Ссылка'"
            v-model="href"
          />
        </div>
        <button type="submit" class="restaurant-button-confirm">
          Подтвердить
        </button>
      </form>
      <!-- <AvailableRestaurants /> -->
    </div>
    <div cl></div>
  </div>
</template>

<script>
import axios from 'axios';
import middleware from '../store/middleware';
// import AvailableRestaurants from './AvailableRestaurants.vue';

export default {
  name: 'Restaurant',
  props: {
    msg: String,
  },
  components: {
    // AvailableRestaurants,
  },
  data: function() {
    return {
      href: '',
      parsed: [],
      name: '',
      id: null,
    };
  },
  created(){
    this.$store.dispatch('retrieveName')
    .then(response=> {
      this.name= response.data.first_name
      this.id= response.data.id})
    },

  methods: {
    restaurantHrefConfirm: function() {
      const params = new URLSearchParams();
      params.append('href', this.href);
      axios
        .post('http://localhost:3001/api/parse', params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((result) => {
          // setLoadingScreen(true);
          // const results = [].concat.apply([], result.data);
          // console.log(result);

          this.parsed = result.data;
          console.log(this.parsed);
          const sendDetails = middleware(
            'sendRestaurantData',
            {
              href: this.href,
              // user:
            }
            // result.data.name
          );

          console.log(sendDetails);
          // setParser(results);
        })
        // console.log(result.data);
        .catch(() => {
          console.log("didn't make through");
          // setLoadingScreen(true);
          // const results = ['Попытка парсинга была неудачна'];
          // setParser(results);
          // console.log(result.data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 140px;
  color: white;
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 20px;
}
/* .restaurant-option-checkboxes > div:hover {
  font-size: 18px;
  text-shadow: 1px;
  transform: scale(1.05);
  transition-duration: 0.25s;
  border: 1px solid hsla(133, 60%, 50%, 0.993);
  background-color: rgba(130, 216, 119, 0.342);
  font-weight: bold;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
} */
.restaurant-option-checkboxes > .active {
  text-shadow: 1px;
  transform: scale(1.05);
  transition-duration: 0.25s;
  border: 1px solid hsla(133, 60%, 50%, 0.993);
  background-color: rgba(130, 216, 119, 0.342);
  font-weight: bold;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
.restaurant-button-confirm {
  /* margin-top: 25px; */
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
.restaurant-button-confirm:hover {
  background-color: #f5f7f9;
}
.restaurant-option h2 {
  padding-top: 15px;
  padding-bottom: 20px;
}
.restaurant-option-checkboxes > div:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
.restaurant-option-checkboxes > div {
  cursor: pointer;
  margin-top: 15px;
  font-weight: 700;
  background-color: rgb(174, 215, 218);
  height: 25px;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;

  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 220px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
}
.restaurant-option-checkboxes {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.restaurant {
  background-image: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgb(90, 50, 236) 100.2%
  );
  height: 100vh;

  box-sizing: border-box;
}
.restaurant::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
.restaurant::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.restaurant::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.restaurant::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}

.restaurant-button-confirm:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}

form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}

form input::placeholder {
  color: white;
}
form input {
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 220px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: left;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
}
form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
  background-color: white;
  width: 300px;
  color: #3ea1db;
}
form button {
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #3ea1db;
  border-radius: 3px;
  width: 250px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:hover {
  transition-duration: 0.25s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
form button:hover {
  background-color: #f5f7f9;
}
</style>

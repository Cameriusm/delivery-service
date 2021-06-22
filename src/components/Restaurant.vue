<template>
  <div class="restaurant">
    <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->
    <!-- <h1>Главная страница</h1> -->
    <div class="restaurant-option-main">
      <div class="restaurant-option">
        <!-- <h1>Введите ссылку на Ресторан, {{ this.$store.state.userId }}:</h1> -->
        <h1>Введите ссылку на Ресторан:</h1>
        <form class="form" @submit.prevent="restaurantHrefConfirm">
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="server-error">
            {{ errorMessage }}
          </div>
          <div class="restaurant-option-checkboxes">
            <input
              type="text"
              placeholder="Ссылка"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Ссылка'"
              v-model="href"
            />
          </div>

          <button
            type="submit"
            class="restaurant-button-confirm"
            :disabled="loading"
          >
            <div class="lds-ring-container " v-if="loading">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div v-if="!loading">
              Подтвердить
            </div>
          </button>
        </form>
        <!-- <AvailableRestaurants /> -->
      </div>
    </div>
    <div cl></div>
  </div>
</template>

<script>
import axios from 'axios';
// import middleware from "../store/middleware";

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
      loading: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  mounted() {
    console.log(this.$store.state.userInfo.userId);
  },
  // created() {
  //   this.$store.dispatch("retrieveUser").then((response) => {
  //     // console.log(response);
  //     this.name = response.data.first_name;
  //     this.id = response.data.id;
  //   });
  // },

  methods: {
    restaurantHrefConfirm: function() {
      this.loading = true;
      const params = new URLSearchParams();
      params.append('href', this.href);
      axios
        .post('http://localhost:3001/api/parse', params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((result) => {
          this.loading = false;
          this.errorMessage = '';
          this.successMessage = 'Ресторан был добавлен';
          // setLoadingScreen(true);
          // const results = [].concat.apply([], result.data);
          // console.log(result);

          this.parsed = result.data;
          console.log(this.parsed);
          // const sendDetails = middleware(
          //   "sendRestaurantData",
          //   {
          //     href: this.href,
          //     userId: this.$store.state.userId,
          //   }
          //   // result.data.name
          // );

          // console.log(sendDetails);
          // setParser(results);
        })
        // console.log(result.data);
        .catch(() => {
          this.successMessage = '';
          this.errorMessage = 'Ошибка добавления ресторана';
          this.loading = false;
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
.server-error {
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  color: #a94442;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 25px;
  background: #f3dede;
  border-radius: 4px;
}
.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  /* margin-bottom: 12px; */
  font-size: 16px;
  padding: 10px 16px;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 4px;
}
.restaurant-option-main {
  padding-top: 140px;
  /* background-color: purple; */
}
.restaurant-option {
  background-color: red;
  width: 40%;
  padding: 20px;

  background-image: linear-gradient(
    109.6deg,
    rgb(62, 136, 179) 11.2%,
    rgb(87, 55, 204) 100.2%
  );
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  border-radius: 15px;
  margin: 0 auto;
  /* padding: 15px; */
}
h1 {
  padding-top: 25px;
  color: white;
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 20px;
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
  height: 45px;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:disabled {
  background-color: rgb(228, 228, 228);
  cursor: initial;
}
.restaurant-button-confirm:hover {
  background-color: #f5f7f9;
}
.restaurant-option h2 {
  padding-top: 15px;
  padding-bottom: 20px;
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
form button:hover:disabled {
  background-color: rgb(228, 228, 228);
}
form button:disabled {
  background-color: rgb(228, 228, 228);
  cursor: initial;
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

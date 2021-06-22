<template>
  <div class="availables-restaurants-main">
    <div class="available-restaurants">
      <div class="form">
        <h1>Доступные заказы:</h1>
        <div>
          <div
            class="form-href"
            v-on:click="selectRestaurant(order.restaurant.id)"
            v-for="order in ordersList"
            :key="order.name"
          >
            <p><span>Ресторан:</span><br />{{ order.restaurant.name }}</p>
            <p>
              <span>Создатель:</span><br />{{ order.restaurant.owner.name }}
            </p>
            <p><span>Телефон:</span><br />{{ order.restaurant.owner.phone }}</p>
          </div>
        </div>
      </div>
      <div class="test-menu">
        <Bill />
      </div>
      <!-- <button>Popup</button> -->
    </div>
  </div>
</template>

<script>
import Bill from "./Bill.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "AvailableRestaurants",
  components: {
    Bill,
  },

  state: {
    // restaurantList: {},
  },
  computed: mapState({
    ordersList: (state) => state.restaurants.ordersList,
  }),
  watch: {
    ordersList: (newVal) => {
      console.log(newVal);
      // this.answer = 'Waiting for you to stop typing...'
      // this.debouncedGetAnswer()
    },
  },
  methods: {
    ...mapActions("restaurants", ["getRestaurants"]),
    // selectRestaurant(id) {
    selectRestaurant(id) {
      // this.$router.push({ path: '/add', params: { id: 1 } });
      // this.$router.push({ name: `addorder`, params: { id: 1 } });
      // this.$router.push({ name: `/add`, params: { id: 1 } });
      this.$router.push({ path: `/orders/add/${id}`, params: { id: id } });
      // this.$router.push({ path: `/orders/add`, params: { id: 1 } });
    },
  },
  mounted() {
    this.getRestaurants();
  },
};
// console.log(this.restaurantList);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.availables-restaurants-main {
  background-image: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgb(90, 50, 236) 100.2%
  );
  height: 100vh;
  height: 200vh;
}
h1 {
  margin-bottom: 25px;
}
.form {
  /* background-color: rgb(39, 75, 160); */
  background-image: linear-gradient(
    109.6deg,
    rgb(62, 136, 179) 11.2%,
    rgb(87, 55, 204) 100.2%
  );
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  border-radius: 15px;

  color: white;
  padding: 20px;
  width: 40%;
  height: auto;
  margin: 0 auto 0 auto;
}
.available-restaurants {
  padding-top: 140px;
  margin: 0 auto 0 auto;
}
.form-href {
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 20px auto 20px auto;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  background-image: linear-gradient(
    109.6deg,
    rgb(73, 143, 184) 11.2%,
    rgb(73, 81, 192) 100.2%
  );
  /* background-color: rgb(54, 125, 184); */
  margin-top: 10px;
  transition: background-image 1s ease-in-out;
  text-align: left;
}
.form-href p {
  text-align: center;
  margin: 0 25px;
  width: 100%;
}
.form-href p span {
  font-size: 14px;
}
.form-href:hover {
  transition: background-image 1s ease-in-out;
  transition-duration: 0.55s;
  /* background-image: linear-gradient(
    109.6deg,
    rgb(91, 61, 199) 11.2%,
    rgb(73, 143, 184) 100.2%
  ); */
  background-image: linear-gradient(
    109.6deg,
    rgb(78, 153, 197) 11.2%,
    rgb(110, 79, 221) 100.2%
  );
  /* background: rgba(122, 212, 240, 0.1); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
button {
  margin-top: 140px;
  padding: 15px;
}
.test-menu {
  margin-top: 200px;
}
</style>

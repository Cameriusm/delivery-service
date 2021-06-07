<template>
  <div class="hello">
    <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->
    <!-- <h1>Главная страница</h1> -->
    <div class="restaurant-option">
      <h1>Выбор ресторана</h1>
      <div class="restaurant-option-checkboxes">
        <!-- <div v-on:click="myFilter" v-bind:class="{ active: isActive }">
          <p>Delivery club</p>
        </div>
        <div v-on:click="myFilter" v-bind:class="{ active: isActive }">
          <p>Yandex food</p>
        </div> -->
        <div
          v-for="item in items"
          :class="{ active: selected == item.id }"
          @click="myFilter(item.id)"
          v-bind:key="item.id"
        >
          <p>{{ item.msg }}</p>
        </div>
      </div>
      <button class="restaurant-button-confirm">Подтвердить</button>
    </div>
  </div>
</template>

<script>
// import Navbar from './Navbar.vue';
//  highlight: item.id == selected
var items = [
  { id: 1, msg: 'Delivery club' },
  { id: 2, msg: 'Yandex food' },
];
// for (var i = 1; i <= 2; i++) {
//   items.push({
//     id: i,
//   });
// }

export default {
  name: 'Login',
  props: {
    msg: String,
  },
  components: {
    // Navbar,
    // Login,
    // Register,
  },
  data: function() {
    return {
      items,
      selected: undefined,
      isActive: false,
    };
  },

  methods: {
    myFilter: function(id) {
      this.selected = id;

      this.isActive = !this.isActive;
      // some code to filter users
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 100px;
  margin-bottom: 20px;
  color: white;
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
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
  color: #53e3a6;
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
.restaurant-option {
  color: white;
  margin: 0 auto;

  width: 350px;
  height: 325px;
  /* border: 1px solid black; */
  /* background-color: #53e3a6; */
  border-radius: 15px;
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
h1 {
  padding-top: 100px;
  color: white;
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
}
.hello {
  background-color: #51bda4;
  height: 100vh;

  box-sizing: border-box;
}
.hello::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
.hello::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.hello::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.hello::-ms-input-placeholder {
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
</style>

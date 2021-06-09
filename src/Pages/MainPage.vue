<template>
  <Restaurant />
  <!-- <Navbar /> -->
  <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->

  <!-- <h1>Главная страница</h1> -->
</template>

<script>
// import Navbar from '../components/Navbar.vue';
import Restaurant from '../components/Restaurant.vue';
// import Navbar from './Navbar.vue';
//  highlight: item.id == selected
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
    Restaurant,
  },
  data: function() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

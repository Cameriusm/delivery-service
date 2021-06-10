<template>
  <Register />
  <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->

  <!-- <h1>Главная страница</h1> -->
</template>

<script>
import Register from '../components/RegisterForm';
// import Navbar from './Navbar.vue';
//  highlight: item.id == selected
// for (var i = 1; i <= 2; i++) {
//   items.push({
//     id: i,
//   });
// }

export default {
  name: 'Registers',
  props: {
    msg: String,
  },
  components: {
    // Navbar,
    // Login,
    Register,
  },
  data: function() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

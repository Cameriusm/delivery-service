<template>
  <LoginForm post-message="this.dataSuccessMessage" />
  <!-- <Navbar msg="Welcome to Your Vue.js App" /> -->

  <!-- <h1>Главная страница</h1> -->
</template>

<script>
import LoginForm from "../../components/LoginForm.vue";
// import Navbar from './components/Navbar.vue';
// import Navbar from './Navbar.vue';
//  highlight: item.id == selected
// for (var i = 1; i <= 2; i++) {
//   items.push({
//     id: i,
//   });
// }

export default {
  name: "Login",
  props: {
    dataSuccessMessage: {
      type: String,
    },
  },
  components: {
    LoginForm,
    // Navbar,
    // Login,
    // Register,
  },
  data: function() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

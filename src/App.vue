<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <!-- <Login msg="Welcome to Your Vue.js App" />
    <Register msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import Login from './components/Login.vue';
// import Register from './components/Register.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    // Login,
    // Register,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
* {
  padding: 0px;
  margin: 0px;
}
</style>

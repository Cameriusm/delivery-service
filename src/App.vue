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

import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Login,
    // Register,
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.lds-ring-container {
  margin: 0 auto;
  /* padding-right: auto; */
  width: 30px;
  /* right: 50%; */
  height: 40px;
}
.lds-ring {
  /* display: inline-block; */
  /* position: absolute; */
  position: relative;
  /* width: auto; */
  /* height: 10px; */
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  /* margin: 8px; */
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #5d34ec transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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

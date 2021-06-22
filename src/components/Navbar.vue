<template>
  <div class="navbar">
    <div class="navbar-links">
      <div v-if="loggedIn"><router-link to="/">Создать</router-link></div>
      <div v-if="loggedIn">
        <router-link to="/orders">Заказы</router-link>
      </div>
      <div v-if="!loggedIn"><router-link to="/login">Вход</router-link></div>
      <div v-if="!loggedIn">
        <router-link to="/register">Регистрация</router-link>
      </div>
      <div v-if="loggedIn">
        <a v-on:click="logout">Выйти</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: rgb(54, 64, 88);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  color: white;
  position: fixed;
  width: 100%;
  height: 55px;
}
.navbar-links {
  height: 55px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
}
.navbar-links > div {
  margin: 0px 15px 0px 20px;
  font-size: 20px;
  border-radius: 15px;
  padding: 7px;
  transition-duration: 0.25s;
}
.navbar-links > div:hover {
  background-color: rgba(162, 136, 255, 0.219);
}
.navbar-links > div > a {
  transition-duration: 0.25s;
  text-decoration: none;
  cursor: pointer;
  color: white;
}
/* .navbar-links > div > a:hover {
  /* color: rgb(221, 216, 238); */
/* color: rgb(212, 238, 238); */
/* } */
</style>

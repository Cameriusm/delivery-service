<template>
  <div class="navbar">
    <div class="navbar-links">
      <div><router-link to="/">Главная</router-link></div>
      <div><router-link to="/Login">Вход</router-link></div>
      <div><router-link to="/Register">Регистрация</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: rgb(58, 56, 56);
  color: white;
  height: 75px;
}
.navbar-links {
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
}
.navbar-links > div {
  margin: 0px 15px 0px 39px;
  font-size: 20px;
}
.navbar-links > div > a {
  text-decoration: none;
  color: white;
}
.navbar-links > div > a:hover {
  color: rgb(212, 238, 238);
}
</style>

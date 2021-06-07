<template>
  <div class="hello">
    <h1>Регистрация</h1>
    <form class="form">
      <input
        type="email"
        placeholder="Email"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Email'"
      />
      <input
        type="password"
        placeholder="Пароль"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Пароль'"
      />
      <input
        type="password"
        placeholder="Подтверждение пароля"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Подтверждение пароля'"
      />
      <button type="submit" id="register-button">Подтвердить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  text-align: center;
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
  color: #53e3a6;
}
form button {
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
form button:hover {
  background-color: #f5f7f9;
}
</style>

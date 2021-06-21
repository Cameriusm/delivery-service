<template>
  <div class="login-form">
    <h1>Авторизация</h1>
    <form class="form" @submit.prevent="login">
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>

      <div v-if="serverError" class="server-error">{{ serverError }}</div>
      <input
        type="email"
        placeholder="Email"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Email'"
        required
        v-model="username"
      />
      <input
        type="password"
        placeholder="Пароль"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Пароль'"
        required
        v-model="password"
      />
      <button type="submit" id="login-button" :disabled="loading">
        <div class="lds-ring-container " v-if="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-if="!loading">
          Войти
        </div>
      </button>
    </form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      serverError: '',
      successMessage: this.dataSuccessMessage,
      loading: false,
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch('retrieveToken', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.loading = false;
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          this.loading = false;
          this.serverError = error.response.data;
          this.password = '';
          this.successMessage = '';
        });
    },
  },
  props: {
    dataSuccessMessage: {
      type: String,
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-error {
  font-size: 16px;
  color: #a94442;
}
.input-error {
  border: 1px solid red;
}

.server-error {
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  color: #a94442;
  width: 250px;
  margin: 20px auto;

  background: #f3dede;
  border-radius: 4px;
}
.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  width: 250px;
  margin: 25px auto;
  border-radius: 4px;
}
h1 {
  padding-top: 180px;
  color: white;
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
}
.login-form {
  background-image: linear-gradient(
    109.6deg,
    rgb(62, 161, 219) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );
  height: 100%;

  box-sizing: border-box;
}
.login-form::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
.login-form::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.login-form::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.login-form::-ms-input-placeholder {
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
  text-align: left;
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
  text-align: left;
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
  width: 240px;
  color: #3ea1db;
  text-align: left;
}
form button {
  appearance: none;
  margin-top: 10px;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:hover {
  transition-duration: 0.25s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
form button:hover {
  background-color: #f5f7f9;
}
form button:disabled {
  background-color: rgb(228, 228, 228);
  cursor: initial;
}
</style>

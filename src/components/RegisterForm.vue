<template>
  <div class="register-form">
    <h1>Регистрация</h1>
    <form class="form" @submit.prevent="register">
      <!-- <div v-if="successMessage" class="success-message">
        {{ succesMessage }}
      </div> -->
      <div v-if="serverErrors" class="server-error">
        <div v-for="(value, key) in serverErrors" :key="key">
          {{ value[0] }}
        </div>
      </div>
      <div class="form-initials">
        <!-- :class="{ 'input-error': errors.has('first_name') }" -->
        <input
          type="text"
          placeholder="Имя"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Имя'"
          required
          v-model="first_name"
        />
        <!-- <span class="form-error">{{ errors.first("first_name") }}</span> -->
        <!-- :class="{ 'input-error': errors.has('second_name') }" -->
        <input
          type="text"
          placeholder="Фамилия"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Фамилия'"
          required
          v-model="second_name"
        />
        <!-- <span class="form-error">{{ errors.first("second_name") }}</span> -->
      </div>
      <!-- :class="{ 'input-error': errors.has('phone') }" -->
      <input
        type="tel"
        pattern="[789][0-9]{10}"
        placeholder="Номер телефона"
        maxlength="11"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Номер телефона'"
        required
        v-model="phone_number"
      />
      <!-- <span class="form-error">{{ errors.first("phone") }}</span> -->
      <!-- :class="{ 'input-error': errors.has('address') }" -->
      <input
        type="text"
        placeholder="Адрес проживания"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Адрес проживания'"
        maxlength="255"
        required
        v-model="address"
      />
      <!-- <span class="form-error">{{ errors.first("address") }}</span> -->
      <!-- :class="{ 'input-error': errors.has('email') }" -->
      <input
        type="email"
        placeholder="Email"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Email'"
        required
        v-model="email"
      />
      <!-- <span class="form-error">{{ errors.first("email") }}</span> -->
      <!-- :class="{ 'input-error': errors.has('password') }" -->
      <input
        type="password"
        placeholder="Пароль"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Пароль'"
        required
        v-model="password"
      />
      <!-- <span class="form-error">{{ errors.first("password") }}</span> -->

      <button type="submit" id="register-button">
        <div class="lds-ring-container " v-if="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-if="!loading">
          Зарегестрироваться
        </div>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String,
  },
  data() {
    return {
      first_name: "",
      second_name: "",
      phone_number: "",
      address: "",
      email: "",
      password: "",
      serverErrors: "",
      successMessage: "",
      loading: false,
    };
  },
  methods: {
    register() {
      this.loading = true;
      this.$store
        .dispatch("register", {
          first_name: this.first_name,
          second_name: this.second_name,
          phone_number: this.phone_number,
          address: this.address,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.loading = false;
          this.successMessage = "Регистрация прошла успешно!";
          console.log(this.successMessage);
          this.$router.push({
            path: "/login",
            params: { dataSuccessMessage: this.successMessage },
          });
        })
        .catch((error) => {
          this.loading = false;
          this.serverErrors = Object.values(error.response.data.errors);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  width: 400px;
  margin: 25px auto;
  border-radius: 4px;
}
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
  width: 400px;
  margin: 20px auto;

  background: #f3dede;
  border-radius: 4px;
}
h1 {
  padding-top: 130px;
  color: white;
  font-weight: 200;
  font-family: "Source Sans Pro", sans-serif;
}
.register-form {
  background-image: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );
  height: 100vh;

  box-sizing: border-box;
}
.register-form::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
}
.register-form::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.register-form::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
.register-form::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-family: "Source Sans Pro", sans-serif;
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
  width: 400px;
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
  width: 420px;
  text-align: left;
  color: #3ea1db;
}
form button {
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  margin-top: 15px;
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
.form-initials {
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 0px !important;
}
.form-initials input {
  width: 180px;
  margin: 0 5px 15px 5px;
}
.form-initials input:focus {
  background-color: white;
  width: 200px;
  color: #3ea1db;
}
</style>

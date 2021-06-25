import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import restaurants from './modules/restaurants/restaurants';
import auth from './modules/auth/auth';

Vue.use(Vuex);
// axios.defaults.baseURL = 'http://2ae2baca79f9.ngrok.io/api';
// axios.defaults.baseURL = "http://localhost/api";
axios.defaults.baseURL = 'http://laravel/api';
export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    // userId: localStorage.getItem('user_id') || null,
    userInfo: {
      userId: localStorage.getItem('user_id') || null,
      firstName: localStorage.getItem('user_first_name') || null,
      secondName: localStorage.getItem('user_second_name') || null,
      phoneNumber: localStorage.getItem('user_phone_number') || null,
      address: localStorage.getItem('user_address') || null,
    },
    // userId: localStorage.getItem('user_id') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    ordersPrice: (state) => (id) => {
      return state.restaurants.ordersList[id].restaurant.orders.reduce(
        (acc, e) => +e.price + acc,
        0
      );
    },
  },
  mutations: {
    retrieveToken(state, token) {
      // retrieveToken(state, token, userId) {
      state.token = token;
      // state.userId = userId;
    },
    retrieveUser(state, userId, firstName, secondName, phoneNumber, address) {
      // retrieveToken(state, token, userId) {
      state.userInfo.userId = userId;
      state.userInfo.firstName = firstName;
      state.userInfo.secondName = secondName;
      state.userInfo.phoneNumber = phoneNumber;
      state.userInfo.address = address;
      // state.userId = userId;
    },
    destroyToken(state) {
      state.token = null;
      state.userInfo.userId = null;
      state.userInfo.firstName = null;
      state.userInfo.secondName = null;
      state.userInfo.phoneNumber = null;
      state.userInfo.address = null;
      // state.userInfo.userId = null;
    },
  },
  actions: {
    // retrieveUser(context) {
    async retrieveUser(context) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + context.state.token;

      // return new Promise((resolve, reject) => {
      // return new Promise(() => {
      return await axios
        // axios
        .get('/user')
        .then((response) => {
          // localStorage.setItem("user_id", userId);
          const userId = response.data.id;
          const firstName = response.data.first_name;
          const secondName = response.data.second_name;
          const phoneNumber = response.data.phone_number;
          const address = response.data.address;
          // const first_name = response.data.first_name;
          localStorage.setItem('user_id', userId);
          localStorage.setItem('user_first_name', firstName);
          localStorage.setItem('user_second_name', secondName);
          localStorage.setItem('user_phone_number', phoneNumber);
          localStorage.setItem('user_address', address);
          context.commit(
            'retrieveUser',
            userId,
            firstName,
            secondName,
            phoneNumber,
            address
          );
          return response;
          // resolve(response);
        })
        .catch((error) => {
          throw error;
          // reject(error);
        });
      // });
    },
    async register(context, data) {
      // return new Promise((resolve, reject) => {
      await axios
        .post('/register', {
          first_name: data.first_name,
          second_name: data.second_name,
          phone_number: data.phone_number,
          address: data.address,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('user_first_name');
          localStorage.removeItem('user_second_name');
          localStorage.removeItem('user_phone_number');
          localStorage.removeItem('user_address');
          context.commit('destroyToken');
          throw error;
        });
      // });
    },
    async destroyToken(context) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + context.state.token;
      if (context.getters.loggedIn) {
        // return new Promise((resolve, reject) => {
        return await axios
          .post('/logout')
          .then((response) => {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');
            return response;
            // console.log(response);
          })
          .catch((error) => {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');
            throw error;
          });
        // });
      }
    },
    async retrieveToken(context, credentials) {
      // return new Promise((resolve, reject) => {
      return await axios.all([
        await axios
          .post('/login', {
            username: credentials.username,
            password: credentials.password,
          })
          .then((response) => {
            const token = response.data.access_token;
            // const userId = response.data.user_id;

            localStorage.setItem('access_token', token);
            // localStorage.setItem("user_id", userId);
            // localStorage.setItem("user_id");
            // context.commit("retrieveToken", token, userId);
            context.commit('retrieveToken', token);
            // this.retrieveUser();
            return response;
            // console.log(response);
          })
          .catch((error) => {
            console.log(error);
            throw error;
          }),
        await context.dispatch('retrieveUser'),
      ]);
    },
  },
  modules: {
    // restaurants: restaurantsModule,
    auth,
    restaurants,
  },
});
export default store;

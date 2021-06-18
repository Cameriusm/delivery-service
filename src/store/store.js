import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import restaurants from './modules/restaurants/restaurants';
import auth from './modules/auth/auth';

Vue.use(Vuex);
// axios.defaults.baseURL = 'http://2ae2baca79f9.ngrok.io/api';
axios.defaults.baseURL = 'http://laravel/api';
export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    userdId: localStorage.getItem('user_id') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
  },
  mutations: {
    retrieveToken(state, token, userId) {
      state.token = token;
      state.userId = userId;
    },
    destroyToken(state) {
      state.token = null;
      state.userId = null;
    },
  },
  actions: {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('/register', {
            first_name: data.first_name,
            second_name: data.second_name,
            phone_number: data.phone_number,
            address: data.address,
            email: data.email,
            password: data.password,
          })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_id');
            context.commit('destroyToken');
            reject(error);
          });
      });
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + context.state.token;
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post('/logout')
            .then((response) => {
              localStorage.removeItem('access_token');
              context.commit('destroyToken');
              resolve(response);
              // console.log(response);
            })
            .catch((error) => {
              localStorage.removeItem('access_token');
              context.commit('destroyToken');
              reject(error);
            });
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/login', {
            username: credentials.username,
            password: credentials.password,
          })
          .then((response) => {
            const token = response.data.access_token;
            const userId = response.data.user_id;

            localStorage.setItem('access_token', token);
            localStorage.setItem('user_id', userId);
            context.commit('retrieveToken', token, userId);
            resolve(response);
            // console.log(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },
  modules: {
    // restaurants: restaurantsModule,
    auth,
    restaurants,
  },
});
export default store;

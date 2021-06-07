import VueRouter from 'vue-router';

import Login from './components/Login.vue';
// import App from './App.vue';
import Register from './components/Register.vue';
import MainPage from './components/MainPage.vue';
// import Navbar from './components/Navbar.vue';

let routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default new VueRouter({ mode: 'history', routes });

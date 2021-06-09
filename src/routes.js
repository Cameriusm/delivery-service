import VueRouter from 'vue-router';

import Login from './Pages/Login.vue';
// import App from './App.vue';
import Register from './Pages/Register.vue';
// import Login from './components/Login.vue';
// import Restaurant from './components/Restaurant.vue';
import MainPage from './Pages/MainPage.vue';
// import Navbar from './components/Navbar.vue';

let routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/',
    component: MainPage,
  },
];

export default new VueRouter({ mode: 'history', routes });

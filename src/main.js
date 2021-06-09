import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { store } from './store/store';
// import Login from './components/Login.vue';

// import Register from './components/Register.vue';
// import Navbar from './components/Navbar.vue';
// const LoginRouter = Login;
// const Bar = { template: '<div>bar</div>' };

Vue.use(VueRouter);

Vue.config.productionTip = false;

// const routes = [
//   { path: '/foo', component: LoginRouter },
//   // { path: '/bar', component: Bar },
// ];

// const router = new VueRouter({
//   routes, // short for `routes: routes`
// });

new Vue({
  render: (h) => h(App),
  store: store,
  router: routes,
}).$mount('#app');

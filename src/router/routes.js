import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Service from '../views/Service.vue';

let routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/',
    component: Service,
    meta: {
      requiresAuth: true,
    },
  },
];

export default new VueRouter({ mode: 'history', routes });

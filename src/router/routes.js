import VueRouter from 'vue-router';

import rService from './Service/rService';
import rLogin from './Login/rLogin';
import rRegister from './Register/rRegister';
import rOrders from './Orders/rOrders';

let routes = [...rService, ...rLogin, ...rRegister, ...rOrders];

export default new VueRouter({ mode: 'history', routes });

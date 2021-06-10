import VueRouter from 'vue-router';

import rService from './Service/rService';
import rLogin from './Login/rLogin';
import rRegister from './Register/rRegister';

let routes = [...rService, ...rLogin, ...rRegister];

export default new VueRouter({ mode: 'history', routes });

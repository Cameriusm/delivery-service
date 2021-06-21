import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router/routes.js";
import { store } from "./store/store";
import * as VeeValidate from "vee-validate";
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

routes.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  render: (h) => h(App),
  store: store,
  router: routes,
}).$mount("#app");

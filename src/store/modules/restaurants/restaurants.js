import { middleware } from '../../middleware';
// import { store } from '../../store';
// import axios from 'axios';

// const store = new Vuex.Store({
export default {
  namespaced: true,
  state: {
    restaurantList: {},
  },
  // getters: {},
  mutations: {
    setRestaurants(state, data) {
      state.restaurantList = data;
    },
  },
  // modules: {},
  actions: {
    async getRestaurants(context) {
      const { data } = await middleware('getRestaurants');
      console.log(data);
      // const { data } = { data: 'bla' };
      // console.log(data);
      context.commit('setRestaurants', data);
    },
  },
};

import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    items: [
      {
        id: 0,
        quantity: 0,
        name: 'prvni',
        popis: 'Lorem ipsum prvni',
        price: 49,
      },
      {
        id: 1,
        quantity: 0,
        name: 'druhy',
        popis: 'Lorem ipsum druhy',
        price: 29,
      },
      {
        id: 2,
        quantity: 0,
        name: 'treti',
        popis: 'Lorem ipsum treti',
        price: 89,
      },
    ],
    products: [],
    contactDetails: {},
  },
  getters: {
    itemsInCart: (state) => {
      return state.products;
    },
  },
  mutations: {
    add: (state, payload) => {
      if (state.products.some((data) => data.id === payload)) {
        state.products[payload].quantity++;
      } else {
        state.products.push({
          id: state.items[payload].id,
          quantity: 1,
          name: state.items[payload].name,
          popis: state.items[payload].popis,
          price: state.items[payload].price,
        });
      }
    },
    subtract: (state, payload) => {
      let minus = state.products[payload].quantity;
      if (minus > 0) {
        state.products[payload].quantity--;
      } else {
        state.products[payload].quantity = 0;
      }
    },
    remove: (state, payload) => {
      state.products.splice(
        state.products.findIndex((item) => item.id === payload),
        1
      );
    },
    addContact: (state, data) => {
      state.contactDetails = Object.assign({}, data);
      console.log(state.contactDetails);
    },
    restart: (state) => {
      state.products = [];
      state.contactDetails = {};
    },
  },
  actions: {},
  modules: {},
});

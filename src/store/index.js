import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    items: [
      {
        id: 1,
        title:
          'Stormtrooper - Lego [středně limitovaná edice, která není až tak vzácná]',
        description:
          'Lego stormtrooper. Vyznačuje se tím, že se nedovede nikam trefit.',
        imageUrl: 'https://zadani.zkus.it/img/ship-item-01.jpg',
        price: 100,
        //1580
      },
      {
        id: 2,
        title: 'Bolek a Lolek',
        description:
          'Bolek a Lolek - klasické retro ve vinylovém provedení. Ocení každý sběratel, kterému je více než 40 let. 😉 (obsahuje obě figurky)',
        imageUrl: 'https://zadani.zkus.it/img/ship-item-02.jpg',
        price: 200,
        //19999
      },
      {
        id: 3,
        title: 'Pink Dino',
        description:
          'Na pomezí vánoční ozdoby a velkého kýče je tento růžový tyranosaurus, který může díky své nízké hmotnosti viset prakticky na kterékoliv větvičce vašeho tématického stromku.',
        imageUrl: 'https://zadani.zkus.it/img/ship-item-03.jpg',
        price: 50,
        //2980
      },
    ],
    products: [],
    total: 0,
    contactDetails: {},
  },
  getters: {
    itemsInCart: (state) => {
      return state.products;
    },
    getTotal: (state) => {
      return state.total;
    },
  },
  mutations: {
    add: (state, payload) => {
      let findIndex = payload + 1;
      let findItem = state.products.findIndex((data) => data.id === findIndex);
      if (findItem === -1) {
        state.products.push({
          id: state.items[payload].id,
          quantity: 1,
          title: state.items[payload].title,
          description: state.items[payload].description,
          imageUrl: state.items[payload].imageUrl,
          price: state.items[payload].price,
        });
        state.total += state.items[payload].price;
      } else {
        state.products[findItem].quantity++;
        state.total += state.items[payload].price;
      }
    },
    increment: (state, payload) => {
      state.products[payload].quantity++;
      state.total += state.products[payload].price;
    },
    subtract: (state, payload) => {
      let minus = state.products[payload].quantity;
      if (minus > 0) {
        state.products[payload].quantity--;
        state.total -= state.products[payload].price;
      } else {
        state.products[payload].quantity = 0;
      }
    },
    remove: (state, payload) => {
      let findIndex = state.products.findIndex((item) => item.id === payload);
      let removeTotal =
        state.products[findIndex].price * state.products[findIndex].quantity;
      state.total -= removeTotal;
      state.products.splice(findIndex, 1);
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

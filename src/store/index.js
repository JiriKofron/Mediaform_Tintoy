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
    //setting empty arrays of products in items that is populated by adding or removing items to the cart by action buttons throught the app
    products: [],
    // variable for counting total price of items in cart, set to zero on the beginning
    total: 0,
    //empty object for contact details written by user in ordering form
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
    // adding the item to the cart. The most complicated part of the app, as the items can be added to the cart in any order, so the index position of each item has to be tracked and check against unique id of each item to properly add or remove count of items or to remove the item completely from the cart
    add: (state, payload) => {
      let findIndex = payload + 1;
      let findItem = state.products.findIndex((data) => data.id === findIndex);
      // the condition check, if this exact product is already in the cart, if not the function push the item details to the cart array and set the quantity to 1
      if (findItem === -1) {
        state.products.push({
          id: state.items[payload].id,
          quantity: 1,
          title: state.items[payload].title,
          description: state.items[payload].description,
          imageUrl: state.items[payload].imageUrl,
          price: state.items[payload].price,
        });
        // the total variable is not part of each item object, so it is separate. The price for the item has to be added to the total sum
        state.total += state.items[payload].price;
        // if the exact item is already in the cart, the function add only quantity of items in cart and add price to total sum
      } else {
        state.products[findItem].quantity++;
        state.total += state.items[payload].price;
      }
    },
    // increment and subtract mutation for cart component, where items that were already put into cart are shown ONLY, it is impossible to add new product on cart component so it is not necessary to check if the item is in the cart, it has to be, so the mutations only counting the number of pieces of each item in cart
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
      // declaring the helping variable, which check and find the item in cart based on id and payload. The payload specify which button in the array of items was clicked - it is inner method of Vuex library - and based on this delete the right item. Without knowing the rank/order of clicked button it would be impossible to delete correct item, as the items can be added to cart in any order
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
      // after sending the data to server it restart the app - meaning empty the cart and contact details
      state.products = [];
      state.contactDetails = {};
    },
  },
  actions: {},
  modules: {},
});

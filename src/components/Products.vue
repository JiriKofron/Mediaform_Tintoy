<template>
  <main class="produkty">
    <h1>Produkty</h1>
    <section class="produkty__zobrazeni">
      <input class="produkty__zobrazeni__search" v-model="search" />
      <p>Hledani: {{ search }}</p>
      <button v-on:click="reset">Reset</button>
      <button>Clear cart</button>
      <Product
        v-for="item in searchProducts"
        v-bind:key="item.name"
        v-bind:item="item"
      />
    </section>
  </main>
</template>

<script>
import Product from '@/components/Product.vue';
// const axios = require('axios');

export default {
  name: 'Products',
  components: {
    Product,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    reset() {
      localStorage.vuex = {};
      //localStorage.vuex.products = [];
    },
  },
  computed: {
    searchProducts: function () {
      let searchPro = this.$store.state.items;
      if (this.search != '' && this.search) {
        searchPro = searchPro.filter((i) => {
          return i.name.toUpperCase().includes(this.search.toUpperCase());
        });
      }
      return searchPro;
    },
  },
  mounted() {
    //   axios
    //     .get('https://zadani.zkus.it/api/products')
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  },
};
</script>

<style lang="scss" scoped>
.produkty {
  h1 {
    font-size: 2rem;
  }

  &__zobrazeni {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__produkt {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

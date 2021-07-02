<template>
  <main class="produkty">
    <h1>Produkty</h1>
    <section class="produkty__zobrazeni">
      <input class="produkty__zobrazeni__search" v-model="search" />
      <p>Hledani: {{ search }}</p>
      <Product
        v-for="item in searchProducts"
        v-bind:key="item.name"
        v-bind:item="item"
      />
    </section>
  </main>
</template>

<script>
import Product from "@/components/Product.vue";
// const axios = require('axios');

export default {
  name: "Products",
  components: {
    Product,
  },
  data() {
    return {
      id: "",
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      search: "",
      items: [
        {
          id: 0,
          count: 0,
          name: "prvni",
          popis: "Lorem ipsum prvni",
          price: 49,
        },
        {
          id: 1,
          count: 0,
          name: "druhy",
          popis: "Lorem ipsum druhy",
          price: 29,
        },
        {
          id: 2,
          count: 0,
          name: "treti",
          popis: "Lorem ipsum treti",
          price: 89,
        },
      ],
    };
  },
  computed: {
    searchProducts: function () {
      let searchPro = this.items;
      if (this.search != "" && this.search) {
        searchPro = searchPro.filter((i) => {
          return i.name.toUpperCase().includes(this.search.toUpperCase());
        });
      }
      return searchPro;
    },
  },
  mounted() {
    // axios
    //   .get('https://zadani.zkus.it/api/products')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.produkty__zobrazeni {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &__produkt {
    width: 100%;
    height: 100%;
  }
}
</style>

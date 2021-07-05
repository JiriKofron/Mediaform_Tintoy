<template>
  <main class="prod-container">
    <h1>FEATURED COLLECTION</h1>
    <hr />
    <section class="prod-container__list">
      <input
        class="prod-container__list__search"
        v-model="search"
        placeholder="&#xF002; Search"
      />
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
    // in case of using persistate, this delete the localStorage vuex object
    // reset() {
    //   localStorage.vuex = {};
    // },
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
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.prod-container {
  display: flex;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.87rem;
    margin-top: 4rem;
  }

  hr {
    background-color: $gray;
    width: 90%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;

    &__search {
      width: 90%;
      height: 2.6rem;
      border-radius: 6px;
      border: 1px solid #9ca3af;
    }
  }
}
</style>

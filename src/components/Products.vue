<template>
  <main class="flex prod-container">
    <h1>FEATURED COLLECTION</h1>
    <hr />
    <input
      class="prod-container__search"
      v-model="search"
      placeholder="Search"
    />
    <section class="prod-container__list">
      <Product
        class="prod-container__list__card flex"
        v-for="(item, index) in searchProducts"
        v-bind:key="item.id"
        v-bind:item="item"
        v-bind:index="index"
      />
    </section>
  </main>
</template>

<script>
import Product from '@/components/Product.vue';

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
  // computed function for searching product based on typing the name to the search field, the database of products is searched after each key press. It can be unefficient and data consuming in large databse or in api calls to backend database, but in this case with just few items it is fast and doesn't create any complication or slowing down the app
  computed: {
    searchProducts: function () {
      let searchPro = this.$store.state.items;
      if (this.search != '' && this.search) {
        searchPro = searchPro.filter((i) => {
          return i.title.toUpperCase().includes(this.search.toUpperCase());
        });
      }
      return searchPro;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.prod-container {
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.87rem;
    margin-top: 4rem;
    color: $gray;

    @include breakpoint(phablet) {
      font-size: 1.875rem;
      line-height: 2.8rem;
    }
  }

  hr {
    background-color: $gray;
    width: 90%;

    @include breakpoint(phablet) {
      width: 46.5rem;
    }
  }

  &__search {
    width: 90%;
    height: 2.6rem;
    border-radius: 6px;
    border: 1px solid #9ca3af;
    padding: 0 1rem;

    @include breakpoint(desktop) {
      width: 16.5rem;
      align-self: flex-end;
      margin-right: 7rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;

    @include breakpoint(desktop) {
      flex-direction: row;
      justify-content: space-around;
      max-width: 70.5rem;
    }
  }
}
</style>

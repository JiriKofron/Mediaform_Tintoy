<template>
  <main class="flex prod-container">
    <h1>FEATURED COLLECTION</h1>
    <hr />
    <section class="prod-container__list flex">
      <input
        class="prod-container__list__search"
        v-model="search"
        placeholder="&#xF002; Search"
      />
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
.prod-container {
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

    &__card:nth-child(2) {
      margin-top: 2rem;
    }

    &__card:nth-last-child(1) {
      margin-bottom: 3.5rem;
    }

    &__card {
      width: 90%;
      background: white;
      margin-top: 1.5rem;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);

      h3 {
        width: 70%;
        font-size: $one-and-half;
        line-height: 2.25rem;
        margin-bottom: 0;
      }

      img {
        width: 100%;
        margin: 1.5rem 0;
      }

      &__description {
        font-size: 0.75rem;
        margin: 0 1.5rem 1rem 1.5rem;
        text-align: left;
      }

      &__price {
        align-self: flex-start;
        margin-left: 1.5rem;
        margin-bottom: 0;
        font-size: $one-and-half;
        font-weight: 600;
        line-height: 2.25rem;
        color: $price-red;

        &--woVAT {
          font-size: 0.87rem;
          align-self: flex-start;
          margin: 0.5rem 0rem 1rem 1.5rem;
          line-height: 1.25rem;

          .wo-text {
            color: #828282;
            font-weight: 400;
          }
        }
      }

      &__btn {
        cursor: pointer;
        width: calc(100% - 3rem);
        height: 2.625rem;
        font-weight: 600;
        font-size: 0.87rem;
        background: $gray;
        color: white;
        margin: 0rem 1.5rem 2rem 1.5rem;
        border: none;
        border-radius: 6px;
      }
    }
  }
}
</style>

<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <q-separator class="separator" />
    <q-pagination
      v-model="page"
      active-color="grey-10"
      color="white"
      :max="2"
    ></q-pagination>
    <q-card v-if="this.page === 1">
      <Cartitem
        v-for="product in itemsInCart"
        v-bind:key="product.id"
        v-bind:product="product"
    /></q-card>
    <q-card v-if="this.page === 2">
      <Cartcontact ref="contactForm" />
    </q-card>
    <button v-on:click="goBack">GO BACK</button>
    <button v-on:click="toCheckOut">CHECKOUT -></button>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1.5rem auto;
  line-height: 3rem;
}

.separator {
  background: $gray;
  width: 90%;
}

.q-card {
  width: 100%;
}

.q-pagination {
  margin-top: 1.5rem;
  width: 50%;
  display: flex;
  button {
    background: #9ca3af;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
}
</style>
<script>
import Cartitem from '@/components/Cartitem.vue';
import Cartcontact from '@/components/Cartcontact.vue';

export default {
  name: 'Cart',
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Cartitem,
    Cartcontact,
  },
  methods: {
    goBack: function () {
      if (this.page === 1) {
        this.$router.push('/');
      } else {
        this.page = 1;
      }
    },
    toCheckOut: function () {
      if (this.page === 1) {
        this.page = 2;
      } else {
        this.$refs.contactForm.onSubmit();
        this.$store.commit('restart');
        this.$router.push('/');
      }
    },
  },

  computed: {
    itemsInCart() {
      return this.$store.getters.itemsInCart;
    },
  },
};
</script>

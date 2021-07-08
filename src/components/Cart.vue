<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <q-separator class="separator" />
    <q-pagination
      class="q-px-sm"
      v-model="page"
      active-color="grey-10"
      color="white"
      :max="2"
    ></q-pagination>
    <q-separator class="separator--pages" />
    <div class="cart__description">
      <p>PRODUCT DETAILS</p>
      <p>QUANTITY</p>
    </div>
    <q-separator class="separator__pale" />
    <q-card v-if="this.page === 1">
      <Cartitem
        class="flex cart__cartitem"
        v-for="(product, index) in itemsInCart"
        v-bind:key="product.id"
        v-bind:product="product"
        v-bind:index="index"
      />
      <div>
        <div>
          <div>PRICE W/O VAT</div>
          <div>$</div>
        </div>
        <div>
          <div>TOTAL PRICE</div>
          <div>$</div>
        </div>
      </div>
    </q-card>
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
  font-size: $one-and-half;
  font-weight: 500;
  margin: 1.5rem auto;
  line-height: 3rem;
}

.separator {
  background: $gray;
  width: 90%;
}

.separator__pale {
  width: 90%;
  background: #d1d5db;
}

.separator--pages {
  background: #d1d5db;
  width: 5.5rem;
  position: absolute;
  top: 8.5rem;
  height: 1px;
  box-sizing: border-box;
}

.q-card {
  width: 100%;
  background: $background-color;
  border: none;
  box-shadow: none;
}

.q-pagination {
  margin-top: 1.5rem;
  display: flex;

  button {
    background: #9ca3af;
    width: 2rem;
    height: 2rem;
    font-family: $Poppins;
    border-radius: 50%;
    padding: 0;
    margin: 0 3.5rem 0 3.5rem;
  }
}

.cart {
  &__description {
    margin-top: 3.5rem;
    font-size: 0.87rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #9ca3af;
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

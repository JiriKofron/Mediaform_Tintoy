<template>
  <div class="cart">
    <Cart />
    <Cartitem
      v-for="product in itemsInCart"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>
<style lang="scss">
.cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import Cart from '@/components/Cart.vue';
import Cartitem from '@/components/Cartitem.vue';

export default {
  name: 'ShoppingCart',
  data() {
    return {};
  },
  components: {
    Cart,
    Cartitem,
  },
  computed: {
    itemsInCart() {
      console.log(this.$store.state.items);
      console.log(this.$store.getters.itemsInCart);
      return this.$store.getters.itemsInCart;
    },
  },
};
</script>

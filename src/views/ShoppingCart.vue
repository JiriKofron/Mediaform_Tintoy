<template>
  <div class="cart-container">
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
  name: 'ShoppingCart',
  data() {
    return {};
  },
  components: {
    Cart,
  },
};
</script>

<style lang="scss">
.cart-container {
  width: 100%;
  min-height: 90vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
}
</style>

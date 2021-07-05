<template>
  <div class="cart">
    <Cart />
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

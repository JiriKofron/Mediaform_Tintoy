<template>
  <div>
    <Cart />
  </div>
</template>
<style lang="scss">
p {
  font-size: 2rem;
}
</style>

<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "ShoppingCart",
  components: {
    Cart,
  },
};
</script>

<template>
  <div class="container">
    <Homepage />
    <Products />
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'Home',
  components: {
    Homepage,
    Products,
  },
};
</script>

<template>
  <div>
    <article class="produkty__zobrazeni__produkt">
      <h3>{{ product.name }}</h3>
      <p>{{ product.popis }}</p>
      <p>{{ product.quantity }}</p>
      <p>${{ product.price }}</p>
      <button v-on:click="add">Buy it now</button>
      <button v-on:click="remove">Sell</button>
    </article>
  </div>
</template>
<style lang="scss"></style>

<script>
export default {
  name: 'Cartitem',
  data() {
    return {};
  },
  props: ['product'],
  methods: {
    add() {
      this.$store.commit('add', this.product.id);
    },
    remove() {
      this.$store.commit('remove', this.product.id);
    },
  },
};
</script>

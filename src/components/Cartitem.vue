<template>
  <div>
    <article class="produkty__zobrazeni__produkt">
      <h3>{{ product.name }}</h3>
      <p>{{ product.popis }}</p>
      <p>${{ product.price }}</p>
      <button v-on:click="remove">remove</button>
      <button v-on:click="add">+</button>
      <p>{{ product.quantity }}</p>
      <button v-on:click="subtract">-</button>
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
    subtract() {
      this.$store.commit('subtract', this.product.id);
    },
    remove() {
      this.$store.commit('remove', this.product.id);
    },
  },
};
</script>

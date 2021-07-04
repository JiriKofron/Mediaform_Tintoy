<template>
  <article class="produkty__zobrazeni__produkt">
    <h3>{{ item.name }}</h3>
    <p>{{ item.popis }}</p>
    <p>{{ item.quantity }}</p>
    <p>${{ item.price }}</p>
    <button v-on:click="add">Buy it now</button>
  </article>
</template>
<script>
export default {
  name: 'Product',
  data() {
    return {};
  },
  props: ['item'],
  methods: {
    add() {
      this.$store.commit('add', this.item.id);
    },
  },
};
</script>

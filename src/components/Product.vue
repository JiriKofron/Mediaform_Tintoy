<template>
  <article>
    <h3>{{ item.title }}</h3>
    <img :src="item.imageUrl" />
    <p class="prod-container__list__card__description">
      {{ item.description }}
    </p>
    <p class="prod-container__list__card__price">${{ item.price }}</p>
    <p class="prod-container__list__card__price--woVAT">
      <span class="wo-text">Without VAT</span> ${{
        (item.price / 1.166).toFixed(2)
      }}
    </p>
    <button class="prod-container__list__card__btn" v-on:click="add">
      BUY IT NOW
    </button>
  </article>
</template>
<script>
export default {
  name: 'Product',
  data() {
    return {};
  },
  props: ['item', 'index'],
  methods: {
    add() {
      this.$store.commit('add', this.index);
    },
  },
};
</script>
<style lang="scss"></style>

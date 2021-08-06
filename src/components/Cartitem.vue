<template>
  <div class="cart__cartitem__container">
    <article>
      <div class="cart__cartitem__container__basic-description">
        <img :src="product.imageUrl" />
        <div class="flex cart__cartitem__container__basic-description__text">
          <h4>{{ product.title }}</h4>
          <p>Lego</p>
          <button v-on:click="remove">remove</button>
        </div>
      </div>
      <div class="cart__cartitem__container__quantity">
        <button v-on:click="subtract">-</button>
        <p class="cart__cartitem__container__quantity__num">
          {{ product.quantity }}
        </p>
        <button v-on:click="increment">+</button>
      </div>
      <div class="cart__cartitem__container__price">
        <p>PRICE W/O VAT</p>
        <p>${{ (product.price / 1.166).toFixed(2) }}</p>
        <p>${{ product.price }}</p>
      </div>
    </article>
    <q-separator class="separator__pale" />
  </div>
</template>

<script>
export default {
  name: 'Cartitem',
  data() {
    return {};
  },
  props: ['product', 'index'],
  methods: {
    increment() {
      this.$store.commit('increment', this.index);
    },
    subtract() {
      this.$store.commit('subtract', this.index);
    },
    remove() {
      this.$store.commit('remove', this.product.id);
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/variables.scss';

.cart__cartitem__container {
  padding-top: 1.5rem;
  padding-left: 1rem;

  &__price {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-basis: 100%;
    padding-bottom: 1.5rem;

    p {
      font-size: 1.125rem;
      line-height: 1.7;
      color: $light-gray;
      margin: 0;
    }

    p:nth-child(1) {
      width: 100%;
      color: #9ca3af;
      text-align: left;
      font-size: 0.87rem;
      padding-bottom: 0.5rem;
    }

    p:nth-last-child(1) {
      padding-right: 1rem;
      color: $gray;
    }
  }

  article {
    display: flex !important;
    flex-wrap: wrap;
  }
  &__basic-description {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 60%;

    &__text {
      button {
        background: none;
        border: none;
        color: #9ca3af;
        font-size: 0.87rem;
        line-height: 1.15rem;
        align-self: flex-start;
        margin-top: 1.125rem;
        padding: 0;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    img {
      height: 5.5rem;
      width: 5.5rem;
      margin-right: 1rem;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 0.87rem;
      line-height: 1.3rem;
      color: $gray;
      text-align: left;
    }

    p {
      color: $price-red;
      text-align: left;
      font-size: 0.87rem;
      font-weight: 400;
    }
  }
  &__quantity {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 35%;

    button {
      height: 2rem;
      width: 2rem;
      margin: 1.4rem 1.15rem;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: $gray;
    }

    &__num {
      display: block;
      height: 2rem;
      width: 2rem;
      margin-top: 1.4rem;
      padding: 0.43rem 0.8rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      text-align: center;
      font-size: 0.87rem;
      line-height: 1.31rem;
    }
  }
}
</style>

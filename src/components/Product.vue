<template>
  <article class="prod-container__list__card__article">
    <h4>{{ item.title }}</h4>
    <img :src="item.imageUrl" />
    <p class="prod-container__list__card__description">
      {{ item.description }}
    </p>
    <div class="prod-container__list__card__interactive flex">
      <p class="prod-container__list__card__interactive__price">
        ${{ item.price }}
      </p>
      <p class="prod-container__list__card__interactive__price--woVAT">
        <span class="wo-text">Without VAT</span> ${{
          (item.price / 1.166).toFixed(2)
        }}
      </p>
      <button
        class="prod-container__list__card__interactive__btn"
        v-on:click="add"
      >
        BUY IT NOW
      </button>
    </div>
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
    // add product to the cart after clicking "Add" button
    add() {
      this.$store.commit('add', this.index);
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.prod-container__list {
  &__card {
    flex-wrap: nowrap !important;
    width: 90%;
    background: white;
    margin-top: 1.5rem;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);

    @include breakpoint(desktop) {
      width: 22.5rem;
      height: 39.8rem;
      margin-top: 0;
      margin-bottom: 2rem;
      position: relative;
      justify-content: flex-start;
    }

    h4 {
      width: 70%;
      font-size: $one-and-half;
      line-height: 2.25rem;
      margin-bottom: 0;
      white-space: nowrap;
      overflow-x: hidden;
    }

    img {
      width: 100%;
      margin: 1.5rem 0;

      @include breakpoint(phablet) {
        height: 18rem;
        background-size: contain;
        aspect-ratio: 1;
      }
    }

    &__description {
      font-size: 0.75rem;
      margin: 0 1.5rem 1rem 1.5rem;
      text-align: left;
    }

    &__interactive {
      width: 100%;
      position: relative;

      @include breakpoint(desktop) {
        margin-bottom: 2rem;
        position: absolute;
        bottom: 0;
      }

      &__price {
        align-self: flex-start;
        margin-left: 1.5rem;
        margin-bottom: 0;
        font-size: $one-and-half;
        font-weight: 600;
        line-height: 2.25rem;
        color: $price-red;

        &--woVAT {
          font-size: 0.87rem;
          align-self: flex-start;
          margin: 0.5rem 0rem 1rem 1.5rem;
          line-height: 1.25rem;

          .wo-text {
            color: #828282;
            font-weight: 400;
          }
        }
      }

      &__btn {
        cursor: pointer;
        width: calc(100% - 3rem);
        height: 2.625rem;
        font-weight: 600;
        font-size: 0.87rem;
        background: $gray;
        color: white;
        margin: 0rem 1.5rem 2rem 1.5rem;
        border: none;
        border-radius: 6px;

        &:hover {
          background: $price-red;
        }

        @include breakpoint(desktop) {
          align-self: flex-end;
          justify-self: flex-end;
          width: 7.25rem;
          position: absolute;
          bottom: 0;
          margin: 0 1rem 1.5rem 1.5rem;
        }
      }
    }
  }

  &__card:nth-child(2) {
    margin-top: 2rem;

    @include breakpoint(desktop) {
      margin-top: 0;
    }
  }

  &__card:nth-last-child(1) {
    margin-bottom: 2rem;
  }
}
</style>

<template>
  <div class="cart flex">
    <h1>Shopping Cart</h1>
    <q-separator class="separator" />
    <q-pagination
      class="q-px-sm"
      v-model="page"
      active-color="grey-10"
      color="white"
      :max="2"
    ></q-pagination>
    <q-separator class="separator--pages" />
    <div v-if="this.page === 1" class="cart__description">
      <p>PRODUCT DETAILS</p>
      <p>QUANTITY</p>
    </div>
    <q-separator v-if="this.page === 1" class="separator__pale" />
    <q-card class="cart_items" v-if="this.page === 1">
      <Cartitem
        class="flex cart__cartitem"
        v-for="(product, index) in itemsInCart"
        v-bind:key="product.id"
        v-bind:product="product"
        v-bind:index="index"
      />
      <div class="cart__items__sum flex">
        <div class="cart__items__sum__wovat">
          <div>PRICE W/O VAT:</div>
          <div>$ {{ woSum }}</div>
        </div>
        <div class="cart__items__sum__total">
          <div>TOTAL PRICE:</div>
          <div>$ {{ sums }}</div>
        </div>
      </div>
    </q-card>
    <q-card v-if="this.page === 2">
      <Cartcontact ref="contactForm" />
    </q-card>
    <div class="cart__btns flex">
      <q-btn color="white" text-color="black" v-on:click="goBack"
        ><q-icon name="arrow_back" />{{ back }}</q-btn
      >
      <q-btn color="black" v-on:click="toCheckOut"
        >{{ btnText }}
        <q-icon v-if="this.page === 1" name="arrow_forward" /><q-icon
          v-else
          name="done"
      /></q-btn>
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">you voe gut</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import Cartitem from '@/components/Cartitem.vue';
import Cartcontact from '@/components/Cartcontact.vue';

export default {
  name: 'Cart',
  data() {
    return {
      page: 1,
      withoutVAT: 0,
      back: 'GO BACK',
      forward: '',
      alert: false,
    };
  },
  components: {
    Cartitem,
    Cartcontact,
  },
  methods: {
    //functions for buttons click to go back and further, the inner text of the buttons depends on actual page position - based on output of btnText() function in computed section
    goBack: function () {
      if (this.page === 1) {
        this.$router.push('/');
      } else {
        this.page = 1;
      }
    },
    toCheckOut: function () {
      if (this.page === 1) {
        this.page = 2;
      } else {
        this.$refs.contactForm.onSubmit();
        this.$store.commit('restart');
        this.$router.push('/');
        this.alert = true;
      }
    },
  },
  computed: {
    // load items in cart that was already put into cart on Product page / component
    itemsInCart() {
      return this.$store.getters.itemsInCart;
    },
    // total sum of items in cart
    sums() {
      return this.$store.getters.getTotal.toFixed(2);
    },
    // total sum without 21% VAT (according to Czech law)
    woSum() {
      this.withoutVAT = (this.sums / 1.166).toFixed(2);
      return this.withoutVAT;
    },
    btnText() {
      if (this.page === 1) {
        this.forward = 'CHECKOUT';
      } else {
        this.forward = 'CONFIRM';
      }

      return this.forward;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

h1 {
  font-size: $one-and-half;
  font-weight: 500;
  margin: 1.5rem auto;
  line-height: 3rem;
}

.separator {
  background: $gray;
  width: 90%;
}

.separator__pale {
  width: 90%;
  background: #d1d5db;
}

.separator--pages {
  background: #d1d5db;
  width: 5.5rem;
  position: absolute;
  left: 37.5%;
  top: 8.5rem;
  height: 1px;
  box-sizing: border-box;
}

.q-card {
  width: 100%;
  background: $background-color;
  border: none;
  box-shadow: none;
}

.q-pagination {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;

  button {
    background: #9ca3af;
    width: 2rem;
    height: 2rem;
    font-family: $Poppins;
    border-radius: 50%;
    padding: 0;
    margin: 0 3.5rem 0 3.5rem;
  }
}

.cart {
  align-items: center;
  width: 100%;
  &__description {
    margin-top: 3.5rem;
    font-size: 0.87rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #9ca3af;
  }

  &__items {
    &__sum {
      flex-direction: row;
      justify-content: space-between;
      margin: 1.5rem 1rem 4rem 1rem;

      &__wovat,
      &__total {
        text-align: right;
        font-size: 1.125rem;
        line-height: 1.7rem;
      }

      &__wovat {
        color: $light-gray;
      }
    }
  }

  &__btns {
    width: 100%;
    flex-direction: row !important;
    justify-content: space-between;
    padding: 0 1rem;

    .q-btn {
      width: 9.5rem;
      height: 2.625rem;
      text-align: center;
    }

    .q-icon {
      padding-left: 0.55rem;
      padding-right: 0.55rem;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/cart"
        ><div class="nav__cart">
          <svg
            :class="{ 'img-dark': $route.path == '/cart' }"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="nav__cart__yCircle"
            :class="{ circle: $route.path == '/' }"
            >{{ cartTotalItems }}
          </span>
        </div></router-link
      >
    </div>
    <router-view />
    <footer>Copyright © 2021 – Tintoy shop – All rights reserved</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cartTotalItems: function () {
      // showing and counting the total number of items in cart that is visible in cart icon on the main page
      let sum = 0;
      for (let i = 0; i < this.$store.state.products.length; i++) {
        sum += this.$store.state.products[i].quantity;
      }
      return sum;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: $Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $background-color;
  font-size: 16px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1352px;
  position: relative;
  overflow-x: hidden;
}

#nav {
  position: absolute;
  right: 1.4rem;
  top: 2rem;
  z-index: 20;

  @include breakpoint(phablet) {
    right: 7.45rem;
  }

  a {
    font-family: $Poppins;
    color: #333333;
    font-size: 0.62rem;

    .nav__cart {
      position: relative;
      text-align: center;

      &__yCircle {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #ffde00;
        color: #333333;
      }
    }
  }
}

.img-dark {
  color: black;
  path {
    stroke: black;
  }
}
.circle {
  color: white;
}

footer {
  font-size: 0.75rem;
  margin: 0 0 2.1rem 0;
}
</style>

<template>
  <div class="homepage">
    <header>
      <h1>Tintoy Shop</h1>
      <div class="header__gradient"></div>
    </header>
    <main class="flex homepage__main">
      <h3>Welcome to Tintoy Shop!</h3>
      <section class="homepage__main__text">
        <p>
          We are a tiny store with nice toys the small and big ones can enjoy
          whithout thinking they are not suited to do so. Based in Prague we
          offer a variety of products which range from absolutely adorable toys
          to things which just make you go WHOA!
        </p>
        <p>
          Anyway - we are glad you came to our website and feel free to check
          our product catalogue below.
        </p>
        <p>
          Once you have decided which of the products you like the most, place
          it into the shopping cart by clicking the "Buy" button. After that
          there are several options you might want to explore:
        </p>
        <ul>
          <li>Adding another product into the cart (even multiple ones)</li>
          <li>
            Search through the product names or descriptions using the search
            field
          </li>
          <li>
            Checking the cart by clicking the cart icon, going back or
            completing your order
          </li>
        </ul>
      </section>
      <h3 class="homepage__main--motto">Let's play all day!</h3>
      <section class="homepage__main__text homepage__main__text--motto">
        <p>
          This is basically our motto and we tend to live by that.
          <strong
            >If anyone tells us differently, we will probably just ignore that
            and move on.</strong
          >
          Ooooor... we might show them one of our fine products so he/she might
          get also fascinated by our toys. Check our featured collection!
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.homepage {
  width: 100%;
}
header {
  width: 100%;
  max-width: 1352px;
  height: 19rem;
  background-image: url('~@/assets/Tintoy_shop.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex !important;
  align-items: flex-end;
  justify-content: center;

  @include breakpoint(phablet) {
    background-image: url('~@/assets/Tintoy_shop_lg.jpg');
    height: 29.5rem;
  }

  .header__gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 19.2rem;
    background: linear-gradient(
      178.45deg,
      rgba(51, 51, 51, 0) 53.43%,
      #0080c3 99.41%
    );
    z-index: 2;

    @include breakpoint(phablet) {
      height: 29.5rem;
    }
  }
  h1 {
    color: white;
    z-index: 10;
    font-family: $Poppins;
    font-size: 3rem;
    line-height: 4.5rem;
    margin: 0.8rem;

    @include breakpoint(phablet) {
      font-size: 6rem;
      line-height: 6.75rem;
    }

    @include breakpoint(desktop) {
      font-size: 9rem;
      line-height: 13.5rem;
    }
  }
}

main {
  align-items: center;

  h3 {
    font-size: $one-and-half;
    font-family: $Poppins;
    line-height: 3rem;
    margin: 1.5rem 0 1rem 0;
    font-weight: 500;
    color: #333333;

    @include breakpoint(desktop) {
      align-self: flex-start;
      padding-left: 1rem;
      font-size: 2.5rem;
      line-height: 3.75rem;
    }
  }

  .homepage__main--motto {
    font-family: $Poppins;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.87;
    color: $gray;

    @include breakpoint(desktop) {
      align-self: flex-start;
      padding-left: 1rem;
      font-size: 1.875rem;
      line-height: 2.8rem;
    }
  }

  .homepage__main__text {
    font-family: $Poppins;
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 1.3rem;
    padding: 0 1rem;
    text-align: left;

    @include breakpoint(desktop) {
      columns: 2;
    }

    &--motto {
      @include breakpoint(desktop) {
        columns: 1;
      }
    }

    ul {
      padding-left: 1.5rem;
    }
  }
}
</style>

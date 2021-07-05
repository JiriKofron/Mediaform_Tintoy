<template>
  <div class="homepage">
    <header>
      <h1>Tintoy Shop</h1>
      <div class="header__gradient"></div>
    </header>
    <main class="homepage__main">
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
      <h4>Let's play all day!</h4>
      <section class="homepage__main__text">
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

<style lang="scss">
@import '@/styles/variables.scss';

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
  }
  h1 {
    color: white;
    z-index: 10;
    font-family: $Poppins;
    font-size: 3rem;
    margin: 0.8rem;
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-family: $Poppins;
    line-height: 3rem;
    margin: 1.5rem 0 1rem 0;
    font-weight: 500;
    color: #333333;
  }

  .homepage__main__text {
    font-family: $Poppins;
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 1.3rem;
    padding: 0 1rem;
    text-align: left;

    ul {
      padding-left: 1.5rem;
    }
  }

  h4 {
    font-family: $Poppins;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.87;
  }
}
</style>

<script>
export default {
  name: 'Homepage',
};
</script>

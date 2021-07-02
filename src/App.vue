<template>
  <div id="app">
    <div id="nav">
      <router-link to="/cart"
        ><img src="@/assets/ShoppingCart.svg"
      /></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
}

#nav {
  position: absolute;
  right: 1.4rem;
  top: 2rem;
  z-index: 20;

  img {
    color: black;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

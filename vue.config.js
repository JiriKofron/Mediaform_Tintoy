module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/src/styles/variables.scss";`,
      },
    },
  },
};

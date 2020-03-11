module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      // See available sourcemaps:
      // https://webpack.js.org/configuration/devtool/#devtool
      // and try out different ones
      config.devtool = "source-map";
    }
  }
};

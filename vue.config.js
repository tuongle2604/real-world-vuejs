module.exports = {
  lintOnSave: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "http://45.76.162.36/realworld/"
      : "/",
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
      config.devtool = "eval-source-map";
    }
  }
};

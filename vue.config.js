const BaseURL = process.env.VUE_APP_API_BASE_URL;
const vueConfig = {
  publicPath: "",
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: BaseURL,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
module.exports = vueConfig;

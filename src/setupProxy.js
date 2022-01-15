const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/maps/api/place/textsearch/json", {
      target: "https://maps.googleapis.com",
      changeOrigin: true,
    })
  );
};

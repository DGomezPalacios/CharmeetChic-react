const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/productos",
    createProxyMiddleware({
      target: "http://localhost:8088",
      changeOrigin: true,
    })
  );

  app.use(
    "/usuario",
    createProxyMiddleware({
      target: "http://localhost:8090",
      changeOrigin: true,
    })
  );

  app.use(
    "/compras",
    createProxyMiddleware({
      target: "http://localhost:8083",
      changeOrigin: true,
    })
  );

  app.use(
    "/categorias",
    createProxyMiddleware({
      target: "http://localhost:8082",
      changeOrigin: true,
    })
  );

  app.use(
    "/contacto",
    createProxyMiddleware({
      target: "http://localhost:8091",
      changeOrigin: true,
    })
  );
};

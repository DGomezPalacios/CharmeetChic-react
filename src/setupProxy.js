const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/usuario",
    createProxyMiddleware({
      target: "http://localhost:8090",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/productos",
    createProxyMiddleware({
      target: "http://localhost:8088",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/compras",
    createProxyMiddleware({
      target: "http://localhost:8083",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/categorias",
    createProxyMiddleware({
      target: "http://localhost:8082",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/contacto",
    createProxyMiddleware({
      target: "http://localhost:8091",
      changeOrigin: true,
    })
  );
};

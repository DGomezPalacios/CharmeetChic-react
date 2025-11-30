const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

  app.use("/carga-masiva",     createProxyMiddleware({ target: "http://localhost:8081", changeOrigin: true }));
  app.use("/categorias",       createProxyMiddleware({ target: "http://localhost:8082", changeOrigin: true }));
  app.use("/compras",          createProxyMiddleware({ target: "http://localhost:8083", changeOrigin: true }));
  app.use("/envios",           createProxyMiddleware({ target: "http://localhost:8084", changeOrigin: true }));
  app.use("/inventario",       createProxyMiddleware({ target: "http://localhost:8085", changeOrigin: true }));
  app.use("/notificaciones",   createProxyMiddleware({ target: "http://localhost:8086", changeOrigin: true }));
  app.use("/pago",             createProxyMiddleware({ target: "http://localhost:8087", changeOrigin: true }));
  app.use("/productos",        createProxyMiddleware({ target: "http://localhost:8088", changeOrigin: true }));
  app.use("/reporte",          createProxyMiddleware({ target: "http://localhost:8089", changeOrigin: true }));
  app.use("/usuario",          createProxyMiddleware({ target: "http://localhost:8090", changeOrigin: true }));
  app.use("/contacto",         createProxyMiddleware({ target: "http://localhost:8091", changeOrigin: true }));

};

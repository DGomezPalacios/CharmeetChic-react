const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/api/usuario",       createProxyMiddleware({ target: "http://localhost:8080", changeOrigin: true }));
  app.use("/api/carga-masiva",  createProxyMiddleware({ target: "http://localhost:8081", changeOrigin: true }));
  app.use("/api/categorias",    createProxyMiddleware({ target: "http://localhost:8082", changeOrigin: true }));
  app.use("/api/compras",       createProxyMiddleware({ target: "http://localhost:8083", changeOrigin: true }));
  app.use("/api/envios",        createProxyMiddleware({ target: "http://localhost:8084", changeOrigin: true }));
  app.use("/api/inventario",    createProxyMiddleware({ target: "http://localhost:8085", changeOrigin: true }));
  app.use("/api/notificaciones",createProxyMiddleware({ target: "http://localhost:8086", changeOrigin: true }));
  app.use("/api/pago",          createProxyMiddleware({ target: "http://localhost:8087", changeOrigin: true }));
  app.use("/api/productos",     createProxyMiddleware({ target: "http://localhost:8088", changeOrigin: true }));
  app.use("/api/reporte",       createProxyMiddleware({ target: "http://localhost:8089", changeOrigin: true }));
};

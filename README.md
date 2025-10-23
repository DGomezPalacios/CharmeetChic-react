# Proyecto Frontend – Charme et Chic
## Asignatura: DSY1104 Desarrollo Fullstack II

## Descripción
Charme et Chic es una aplicación web desarrollada en React para la gestión y venta de joyería.  
Permite explorar productos, agregarlos al carrito de compras, simular procesos de pago y acceder a un panel administrativo para gestionar usuarios, pedidos y catálogo.

---

## Tecnologías utilizadas
- React
- Bootstrap 
- ESBuild  
- Karma + Jasmine + Testing Library (para pruebas unitarias)  
- Node.js y npm

---

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DGomezPalacios/CharmeetChic-react

2. Entrar en el directorio del proyecto:
   ```bash
    cd charme-et-chic-react

3. Instalar dependencias:
    ```bash
    npm install

4. Iniciar la aplicación:
    ```bash
    npm start


La pagina se abrirá en http://localhost:3000

## Ejecución de pruebas:
Para ejecutar las pruebas unitarias del proyecto:
npm run test:karma

Esto abrirá ChromeHeadless y ejecutará los tests definidos en la carpeta tests/, mostrando los resultados en la consola con el reporter spec.


## Pruebas incluidas:
- Header: estructura, clases y NavBar.
- NavBar: enlaces, estados activos y acción de búsqueda.
- CartContext: agregar, eliminar, limpiar y actualizar productos.
- Cart Page: renderizado del carrito y mensajes condicionales.
- Checkout: renderizado de la página de pago.


## Funcionalidades principales:
- Catálogo de productos: visualización y navegación por categorías.
- Carrito de compras: agregar, actualizar y eliminar productos.
- Checkout simulado: proceso de compra con vistas de éxito y error.
- Panel administrativo: administración de usuarios, pedidos y productos.
- Navegación dinámica: rutas gestionadas con React Router DOM.
- Pruebas unitarias: verificación de componentes principales.

## Autoras:
- Daniela Gómez Palacios
- Berta Soto Jerez

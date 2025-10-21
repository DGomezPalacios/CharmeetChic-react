import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AboutUs from './pages/AboutUs';
import RepareAndPers from './pages/RepareAndPers';
import Checkout from './pages/Checkout';  
import Success from './pages/Success';     
import Fail from './pages/Fail';          

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />  
          <Route path="/success" element={<Success />} />   
          <Route path="/fail" element={<Fail />} />          
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registration />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/personalizacion-reparacion" element={<RepareAndPers />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

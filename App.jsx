import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Privacy from './Privacy.jsx';
import Terms from './Terms.jsx';
import ShippingReturns from './ShippingReturns.jsx';
import SizeGuide from './SizeGuide.jsx';
import Journal from './Journal.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}

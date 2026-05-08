import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/web_layout/Navbar';
import Footer from './components/web_layout/Footer';


import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';


import Home from './pages/web/Home';
import Shop from './pages/web/Shop';
import ProductDetailPage from './pages/web/ProductDetailPage';




import Contact from './pages/web/Contact';
import Wishlist from './pages/web/Wishlist';
import Cart from './pages/web/cart';



export default function App() {
  return (
    <Router>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}



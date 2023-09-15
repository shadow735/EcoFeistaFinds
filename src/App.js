import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Productlist from './Page/Productlist';
import Cart from './Page/Cart';
import Header from './components/header';
import Blog from './Page/Blog';
import Login from './Page/Login';
import Signup from './Page/SignUp';
import Admin from './admin/admin';
import Product from './admin/product';
import Dashboard from './admin/dashboard';
function App() {
  return (
    <Router>
      <div>
        {/* Include the Header component for navigation */}
        <Header />
        <main>
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/About" element={<About />} /> {/* About Page */}
            <Route path="/Contact" element={<Contact />} /> {/* Contact Page */}
            <Route path="/Productlist" element={<Productlist />} /> {/* Product List Page */}
            <Route path="/Cart" element={<Cart />} /> {/* Cart Page */}
            <Route path="/Blog" element={<Blog />} /> {/* Blog Page */}
            <Route path="/Login" element={<Login />} /> {/* Login Page */}
            <Route path="/Signup" element={<Signup />} /> {/* Login Page */}
            <Route path="/Admin" element={<Admin />} /> {/* Login Page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Login Page */}
            <Route path="/product" element={<Product />} /> {/* Login Page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import PublicHome from './pages/public/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/aboutus/About.jsx';
import ShopAll from './components/shopall/ShopAll.jsx';
import ProductEnquiry from './components/productenquiry/ProductEnquiry.jsx';
import AllProducts from './components/allproducts/AllProducts.jsx';
import ProductDetails from './components/productdetails/ProductDetails.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/contactus/Contact.jsx';

// Admin Pages
import Dashboard from './pages/admin/Dashboard.jsx';
import AddProduct from './pages/admin/AddProduct.jsx';
import AllProduct from './pages/admin/AllProduct.jsx';
import Login from './pages/admin/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/shop-all" element={<ShopAll />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/product-enquiry" element={<ProductEnquiry />} />
      <Route path="/contact-us" element={<Contact />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/add-product"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      />
       <Route
        path="/admin/all-products"
        element={
          <PrivateRoute>
            <AllProduct />
          </PrivateRoute>
        }
      />



    </Routes>
    <Footer />
  </>
);

export default App;

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import PublicHome from './pages/public/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/aboutus/About.jsx';
import ShopAll from './components/shopall/ShopAll.jsx';
import ProductEnquiry from './components/productenquiry/ProductEnquiry.jsx';
import KidneyHealthEducation from './components/kidneyhealtheducation/KidneyHealthEducation.js'
import AllProducts from './components/allproducts/AllProducts.jsx';
import ProductDetails from './components/productdetails/ProductDetails.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/contactus/Contact.jsx';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy.js';

// Admin Pages
import Dashboard from './pages/admin/Dashboard.jsx';
import AddProduct from './pages/admin/AddProduct.jsx';
import AllProduct from './pages/admin/AllProduct.jsx';
import Login from './pages/admin/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/admin/login';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/kidney-health-education" element={<KidneyHealthEducation />} />
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
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

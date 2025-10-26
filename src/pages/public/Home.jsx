import React, { useEffect } from 'react';
// import Banner from '../../components/banner/Banners.jsx';
import HeroSection from '../../components/herosection/HeroSection.jsx';
import About from '../../components/aboutus/About.jsx';
import Categories from '../../components/categories/Categories.jsx';
import CTAHome from '../../components/cta/CTAHome.jsx';
import ContactUs from '../../components/contactus/Contact.jsx';
import FAQs from "../../components/whatsNew/FAQs.js"
import Blogs from "../../components/blogs/Blogs.js"

const PublicHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      {/* <Categories /> */}
      <About />
      <CTAHome />
      <Blogs />
      <FAQs />
      <ContactUs />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918638220836"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          className="whatsapp-icon"
        />
      </a>

      <style>{`
  .whatsapp-float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 1000;
    transition: transform 0.2s ease, background 0.3s ease;
  }
  .whatsapp-float:hover {
    background-color: #2fb866ff;
  }
  .whatsapp-icon {
    width: 35px;
    height: 35px;
  }
`}</style>


    </div>
  );
};

export default PublicHome;

import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1b3a2f', // forest green
      color: '#f1f8e9', // light natural text
      fontFamily: 'Montserrat, sans-serif',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    }}>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        padding: '3rem 1rem'
      }}>
        {/* Column 1: Brand + Contact + Social */}
        <div style={{ flex: '1 1 260px', minWidth: '250px' }}>
          <h4 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            fontFamily: 'Figtree',
            color: '#f1f8e9',
            marginBottom: '1rem'
          }}>
            NaturalCampsite
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', fontFamily: 'Figtree' }}>
            Your perfect escape into nature. Enjoy camping, adventure, and serenity surrounded by beautiful landscapes.
          </p>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaWhatsapp style={{ color: '#25d366', fontSize: '20' }} />
              <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" style={{ color: '#f1f8e9', textDecoration: 'none', fontFamily: 'Figtree', }}>
                +91 12345 67890
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaPhoneAlt style={{ color: '#fff' }} />
              <a href="tel:+911234567890" style={{ color: '#f1f8e9', fontFamily: 'Figtree', textDecoration: 'none' }}>
                +91 12345 67890
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaEnvelope style={{ color: '#fff' }} />
              <a href="mailto:info@naturalcampsite.com" style={{ color: '#f1f8e9', fontFamily: 'Figtree', textDecoration: 'none' }}>
                info@naturalcampsite.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            fontSize: '1.3rem'
          }}>
            <a href="#!"><FaFacebookF style={{ color: '#f1f8e9' }} /></a>
            <a href="#!"><FaInstagram style={{ color: '#f1f8e9' }} /></a>
            <a href="#!"><FaTwitter style={{ color: '#f1f8e9' }} /></a>
            <a href="#!"><FaYoutube style={{ color: '#f1f8e9' }} /></a>
            <a href="#!"><FaPinterest style={{ color: '#f1f8e9' }} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontFamily: 'Figtree', fontSize: '1.4rem', color: '#f1f8e9', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', lineHeight: '2.5', fontFamily: 'Figtree' }}>
            {['Home', 'Camping Spots', 'Adventure Activities', 'About Us'].map(item => (
              <li key={item}>
                <a
                  href="#!"
                  style={{
                    color: '#f1f8e9',
                    fontSize: 15.4,
                    textDecoration: 'none',
                    fontFamily: 'Figtree, sans-serif'
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontFamily: 'Figtree', fontSize: '1.4rem', color: '#f1f8e9', marginBottom: '1rem' }}>Help</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', lineHeight: '2.5', fontFamily: 'Figtree' }}>
            <li>
              <a href="/contact" style={{ color: '#f1f8e9', textDecoration: 'none' }}>Contact Us</a>
            </li>
            <li>
              <a href="/faqs" style={{ color: '#f1f8e9', textDecoration: 'none' }}>FAQs</a>
            </li>
            <li>
              <a href="/booking" style={{ color: '#f1f8e9', textDecoration: 'none' }}>Book Your Camp</a>
            </li>
            <li>
              <a href="/privacy-policy" style={{ color: '#f1f8e9', textDecoration: 'none' }}>Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={{ flex: '1 1 240px', minWidth: '250px' }}>
          <h4 style={{ fontFamily: 'Figtree', fontSize: '1.4rem', color: '#f1f8e9', marginBottom: '1rem' }}>Stay Updated</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontFamily: 'Figtree' }}>
            Subscribe to our newsletter for latest campsite offers and adventure tips.
          </p>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ccc',
              borderRadius: '12px',
              outline: 'none',
              color: '#121212',
              marginBottom: '0.8rem',
              fontWeight: 'bold',
              fontFamily: 'Figtree',
            }}
          />
          <button style={{
            background: '#336b36ff',
            color: '#fff',
            padding: '10px 18px',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
          }}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        textAlign: 'center',
        padding: '1.5rem 0',
        fontSize: '0.85rem',
        borderTop: '1px solid #1b5e20',
        fontFamily: 'Figtree',
        color: '#d6f5d6',
      }}>
        © {new Date().getFullYear()} NaturalCampsite | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

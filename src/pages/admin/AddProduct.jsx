import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from './addproducts.module.css';

// ===== Firebase (Dimaniwas Campsite) =====
const firebaseConfig = {
  apiKey: "AIzaSyCMzZOz8D3BoMvN9m_gl4Bo02_xXw34gc4",
  authDomain: "dimaniwascampsite.firebaseapp.com",
  projectId: "dimaniwascampsite",
  storageBucket: "dimaniwascampsite.appspot.com",
  messagingSenderId: "465300324612",
  appId: "1:465300324612:web:460b0bd13d2c92d3df9051"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// =======================================

const AddProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tent, setTent] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (field, value) => {
    setTent(prev => ({ ...prev, [field]: value }));
  };

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dev-binudstorage', // KEEP SAME
        uploadPreset: 'mrittika_unsigned', // KEEP SAME
        sources: ['local'],
        multiple: false,
        cropping: false,
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  };

  const handleSave = async () => {
    if (!tent.name || !tent.description || !tent.price || !imageUrl) {
      alert('Please fill all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'tents'), {
        ...tent,
        image: imageUrl,
        createdAt: new Date()
      });

      alert('Tent added successfully!');
      setTent({ name: '', description: '', price: '' });
      setImageUrl('');
    } catch (err) {
      console.error(err);
      alert('Failed to add tent');
    }
  };

  return (
    <div className={`d-flex flex-column flex-md-row ${styles.container}`}>
      <button className="btn btn-dark d-md-none m-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div className={`bg-dark text-white p-4 ${styles.sidebar} ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}>
        <h2 className={styles.logo}>Admin</h2>
        <ul className="nav flex-column admin_dashboard" style={{ marginLeft: '-14px' }}>
          <li><a href="/admin/dashboard" className="nav-link text-white">Dashboard</a></li>
          <li><a href="/admin/add-product" className="nav-link text-warning">Add Tent</a></li>
          <li><a href="/admin/all-products" className="nav-link text-white">Manage Tents</a></li>
        </ul>
      </div>

      {/* Main */}
      <div className={`p-4 w-100 ${styles.main}`}>
        <h2 className={styles.addProduct_title}>Add New Tent</h2>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label>Tent Name</label>
            <input
              type="text"
              value={tent.name}
              onChange={e => handleChange('name', e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              value={tent.description}
              onChange={e => handleChange('description', e.target.value)}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Price (₹ / day)</label>
            <input
              type="number"
              value={tent.price}
              onChange={e => handleChange('price', e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.imageUploadBox}>
            <label>Upload Image</label>
            <button onClick={handleUpload} className={styles.uploadButton}>Upload</button>
            {imageUrl && (
              <div className={styles.imagePreviewWrapper}>
                <img src={imageUrl} alt="Preview" className={styles.imagePreview} />
              </div>
            )}
          </div>

          <button onClick={handleSave} className={styles.saveButton}>Save Tent</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

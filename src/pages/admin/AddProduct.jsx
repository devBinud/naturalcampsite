import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import styles from './addproducts.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyAyoM6Lok3cRrogONmb5v10IYmwda1l4QY",
  authDomain: "mrittikanaturals-e0674.firebaseapp.com",
  projectId: "mrittikanaturals-e0674",
  storageBucket: "mrittikanaturals-e0674.appspot.com",
  messagingSenderId: "1074134155290",
  appId: "1:1074134155290:web:9f6c837ba0fe32dcefd1a3",
  measurementId: "G-GQ2JE9C3FD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const AddProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    category: '',
    description: '',
    longDesc1: '',
    longDesc2: '',
    longDesc3: '',
    mrp: '',
    discount: '',
    price: ''
  });

  const [imageUrl, setImageUrl] = useState('');

  const generateSlug = (name) =>
    name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const handleNameChange = (e) => {
    const name = e.target.value;
    setProduct((p) => ({
      ...p,
      name,
      slug: generateSlug(name),
    }));
  };

  const handleMrpOrDiscountChange = (field, value) => {
    const updated = { ...product, [field]: value };
    if (updated.mrp && updated.discount) {
      const price = Math.round(
        parseFloat(updated.mrp) -
        (parseFloat(updated.mrp) * parseFloat(updated.discount)) / 100
      );
      updated.price = price.toString();
    }
    setProduct(updated);
  };

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dev-binudstorage',
        uploadPreset: 'mrittika_unsigned',
        sources: ['local'],
        multiple: false,
        cropping: false,
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          setImageUrl(result.info.secure_url);
        } else if (error) {
          console.error('Upload Error:', error);
        }
      }
    );
  };

  const handleSave = () => {
    const { name, slug, category, description, mrp, price } = product;
    if (!name || !slug || !category || !description || !mrp || !price || !imageUrl) {
      alert('Please fill all required fields');
      return;
    }

    const productsRef = ref(db, 'products');
    push(productsRef, { ...product, image: imageUrl });

    alert('Product added successfully!');
    setProduct({
      name: '',
      slug: '',
      category: '',
      description: '',
      longDesc1: '',
      longDesc2: '',
      longDesc3: '',
      mrp: '',
      discount: '',
      price: ''
    });
    setImageUrl('');
  };

  return (
    <div className={`d-flex flex-column flex-md-row ${styles.container}`}>
      {/* Toggle Button for Mobile */}
      <button className="btn btn-dark d-md-none m-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-4 ${styles.sidebar} ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <h2 className={styles.logo}>Admin</h2>
        <ul className="nav flex-column admin_dashboard" style={{ marginLeft: '-14px' }}>
          <li>
            <a href="/admin/dashboard" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/add-product" className="nav-link text-warning">
              Add Product
            </a>
          </li>
          <li>
            <a href="/admin/all-products" className="nav-link text-white">
              Manage Products
            </a>
          </li>
        </ul>
      </div>


      {/* Main Content */}
      <div className={`p-4 w-100 ${styles.main}`}>
        <h2 className={styles.addProduct_title}>Add New Product</h2>
        <div className={styles.form}>
          {[
            { label: 'Product Name', value: product.name, onChange: handleNameChange, name: 'name' },
            { label: 'Slug', value: product.slug, readOnly: true, name: 'slug' },
            { label: 'Category', value: product.category, name: 'category' },
          ].map((field, i) => (
            <div key={i} className={styles.formGroup}>
              <label>{field.label}</label>
              <input
                type="text"
                value={field.value}
                onChange={field.onChange || (e => setProduct(p => ({ ...p, [field.name]: e.target.value })))}
                readOnly={field.readOnly}
                className={`${styles.input} ${field.readOnly ? styles.readonly : ''}`}
              />
            </div>
          ))}

          {['description', 'longDesc1', 'longDesc2', 'longDesc3'].map((desc, i) => (
            <div key={i} className={styles.formGroup}>
              <label>{desc === 'description' ? 'Short Description' : `Long Description ${i}`}</label>
              <textarea
                value={product[desc]}
                onChange={e => setProduct(p => ({ ...p, [desc]: e.target.value }))}
                className={styles.textarea}
              />
            </div>
          ))}

          <div className={styles.formGroup}>
            <label>MRP</label>
            <input
              type="number"
              value={product.mrp}
              onChange={e => handleMrpOrDiscountChange('mrp', e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Discount (%)</label>
            <input
              type="number"
              value={product.discount}
              onChange={e => handleMrpOrDiscountChange('discount', e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Price (auto-calculated)</label>
            <input
              type="number"
              value={product.price}
              readOnly
              className={`${styles.input} ${styles.readonly}`}
            />
          </div>

          <div className={styles.imageUploadBox}>
            <label>Upload Product Image</label>
            <button onClick={handleUpload} className={styles.uploadButton}>Upload Image</button>
            {imageUrl && (
              <div className={styles.imagePreviewWrapper}>
                <img src={imageUrl} alt="Preview" className={styles.imagePreview} />
              </div>
            )}
          </div>

          <button onClick={handleSave} className={styles.saveButton}>Save Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

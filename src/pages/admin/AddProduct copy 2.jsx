import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import styles from './addproducts.module.css';

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAyoM6Lok3cRrogONmb5v10IYmwda1l4QY",
  authDomain: "mrittikanaturals-e0674.firebaseapp.com",
  projectId: "mrittikanaturals-e0674",
  storageBucket: "mrittikanaturals-e0674.appspot.com",
  messagingSenderId: "1074134155290",
  appId: "1:1074134155290:web:9f6c837ba0fe32dcefd1a3",
  measurementId: "G-GQ2JE9C3FD"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const AddProduct = () => {
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

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setProduct(p => ({
      ...p,
      name,
      slug: generateSlug(name)
    }));
  };

  const handleMrpOrDiscountChange = (field, value) => {
    const updated = {
      ...product,
      [field]: value
    };

    if (updated.mrp && updated.discount) {
      const price = Math.round(
        parseFloat(updated.mrp) - (parseFloat(updated.mrp) * parseFloat(updated.discount)) / 100
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
        cropping: false
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
    const {
      name, slug, category, description,
      mrp, price
    } = product;

    if (!name || !slug || !category || !description || !mrp || !price || !imageUrl) {
      alert('Please fill all required fields');
      return;
    }

    const productsRef = ref(db, 'products');
    push(productsRef, {
      ...product,
      image: imageUrl
    });

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
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Add New Product</h2>
      <p>Hello Add new producyt here </p>

      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={handleNameChange}
      /><br /><br />

      <input
        type="text"
        placeholder="Slug"
        value={product.slug}
        readOnly
      /><br /><br />

      <input
        type="text"
        placeholder="Category"
        value={product.category}
        onChange={e => setProduct(p => ({ ...p, category: e.target.value }))}
      /><br /><br />

      <textarea
        placeholder="Short Description"
        value={product.description}
        onChange={e => setProduct(p => ({ ...p, description: e.target.value }))}
      /><br /><br />

      <textarea
        placeholder="Long Description 1"
        value={product.longDesc1}
        onChange={e => setProduct(p => ({ ...p, longDesc1: e.target.value }))}
      /><br /><br />

      <textarea
        placeholder="Long Description 2"
        value={product.longDesc2}
        onChange={e => setProduct(p => ({ ...p, longDesc2: e.target.value }))}
      /><br /><br />

      <textarea
        placeholder="Long Description 3"
        value={product.longDesc3}
        onChange={e => setProduct(p => ({ ...p, longDesc3: e.target.value }))}
      /><br /><br />

      <input
        type="number"
        placeholder="MRP"
        value={product.mrp}
        onChange={e => handleMrpOrDiscountChange('mrp', e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Discount %"
        value={product.discount}
        onChange={e => handleMrpOrDiscountChange('discount', e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Price (auto-calculated)"
        value={product.price}
        readOnly
      /><br /><br />

      <button onClick={handleUpload}>Upload Image</button><br /><br />

      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" width="150" /><br /><br />
        </div>
      )}

      <button onClick={handleSave}>Save Product</button>
    </div>
  );
};

export default AddProduct;

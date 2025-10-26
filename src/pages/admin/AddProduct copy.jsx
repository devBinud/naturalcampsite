import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// ✅ Firebase configuration
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
    description: '',
    mrp: '',
    price: ''
  });
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dev-binudstorage', // ✅ your correct cloud name
        uploadPreset: 'mrittika_unsigned', // ✅ your correct unsigned preset
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
    if (!product.name || !product.price || !product.mrp || !product.description) {
      alert('Please fill all fields');
      return;
    }

    if (!imageUrl) {
      alert('Please upload an image first');
      return;
    }

    const productsRef = ref(db, 'products');
    push(productsRef, {
      ...product,
      image: imageUrl
    });

    alert('Product added successfully!');
    setProduct({ name: '', description: '', mrp: '', price: '' });
    setImageUrl('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={e => setProduct(p => ({ ...p, name: e.target.value }))}
      /><br /><br />

      <textarea
        placeholder="Description"
        value={product.description}
        onChange={e => setProduct(p => ({ ...p, description: e.target.value }))}
      /><br /><br />

      <input
        type="text"
        placeholder="MRP"
        value={product.mrp}
        onChange={e => setProduct(p => ({ ...p, mrp: e.target.value }))}
      /><br /><br />

      <input
        type="text"
        placeholder="Price"
        value={product.price}
        onChange={e => setProduct(p => ({ ...p, price: e.target.value }))}
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

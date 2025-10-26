import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './allproduct.module.css';
import { getDatabase, ref, onValue, remove, update } from 'firebase/database';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');

    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedProducts = [];
      for (let key in data) {
        loadedProducts.push({ id: key, ...data[key] });
      }
      setProducts(loadedProducts.reverse());
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const db = getDatabase();
      remove(ref(db, `products/${productId}`));
    }
  };

  const handleEditChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const db = getDatabase();
    const { id, image, ...updateData } = editProduct;
    update(ref(db, `products/${id}`), updateData);
    document.getElementById('editClose').click();
  };

  return (
    <div className={`d-flex flex-column flex-md-row ${styles.allProduct_container}`}>

      {/* Toggle button for mobile */}
      <button
        className="btn btn-dark d-md-none m-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-4 ${styles.sidebar} ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <h4 className="mb-4">Admin</h4>
        <ul className="nav flex-column" style={{ marginLeft: '-15px' }}>
          <li>
            <Link className="nav-link text-white" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/admin/add-product">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="nav-link active text-warning" to="/admin/all-products">
              Manage Products
            </Link>
          </li>
        </ul>
      </div>


      {/* Main Content */}
      <div className={`p-4 w-100 ${styles.main}`}>
        <h2 className={styles.allProduct_heading}>All Products</h2>
        {loading ? (
          <p className={styles.allProduct_loader}>Loading...</p>
        ) : products.length === 0 ? (
          <p className={styles.allProduct_noData}>No products found.</p>
        ) : (
          <div className={`table-responsive ${styles.allProduct_tableWrapper}`}>
            <table className={`table table-bordered table-striped ${styles.allProduct_table}`}>
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>MRP</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td><img src={p.image} alt={p.name} className={styles.allProduct_img} /></td>
                    <td>{p.name}</td>
                    <td>₹{p.mrp}</td>
                    <td>₹{p.price}</td>
                    <td>{p.category}</td>
                    <td>
                      <button className={`btn btn-sm btn-primary me-1`} data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() => setSelectedProduct(p)}>View</button>
                      <button className={`btn btn-sm btn-warning me-1`} data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setEditProduct(p)}>Edit</button>
                      <button className={`btn btn-sm btn-danger`} onClick={() => handleDelete(p.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Modal */}
      <div className="modal fade" id="viewModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product Details</h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <div>
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid mb-3" />
                  <p><strong>Name:</strong> {selectedProduct.name}</p>
                  <p><strong>MRP:</strong> ₹{selectedProduct.mrp}</p>
                  <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
                  <p><strong>Category:</strong> {selectedProduct.category}</p>
                  <p><strong>Description:</strong> {selectedProduct.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" id="editClose" />
            </div>
            <div className="modal-body">
              {editProduct && (
                <>
                  <div className="mb-2">
                    <label>Name</label>
                    <input type="text" className="form-control shadow-none" name="name" value={editProduct.name} onChange={handleEditChange} />
                  </div>
                  <div className="mb-2">
                    <label>MRP</label>
                    <input type="text" className="form-control shadow-none" name="mrp" value={editProduct.mrp} onChange={handleEditChange} />
                  </div>
                  <div className="mb-2">
                    <label>Price</label>
                    <input type="text" className="form-control shadow-none" name="price" value={editProduct.price} onChange={handleEditChange} />
                  </div>
                  <div className="mb-2">
                    <label>Category</label>
                    <input type="text" className="form-control shadow-none" name="category" value={editProduct.category} onChange={handleEditChange} />
                  </div>
                  <div className="mb-2">
                    <label>Description</label>
                    <textarea className="form-control shadow-none" name="description" value={editProduct.description} onChange={handleEditChange}></textarea>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleEditSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

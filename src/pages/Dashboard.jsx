import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import { Plus, Edit, Trash2, Image as ImageIcon, X } from 'lucide-react';

const CATEGORIES = ['Ikan hias', 'Aquarium', 'Pakan ikan', 'Aksesoris aquarium'];

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    nama_produk: '',
    harga: '',
    deskripsi: '',
    kategori: CATEGORIES[0],
    gambar: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('produk')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return formData.gambar;

    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('produk_images')
      .upload(filePath, imageFile);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('produk_images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.gambar;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const productData = {
        nama_produk: formData.nama_produk,
        harga: parseInt(formData.harga),
        deskripsi: formData.deskripsi,
        kategori: formData.kategori,
        gambar: imageUrl
      };

      if (formData.id) {
        // Update
        const { error } = await supabase
          .from('produk')
          .update(productData)
          .eq('id', formData.id);
        
        if (error) throw error;
        alert('Produk berhasil diupdate!');
      } else {
        // Insert
        const { error } = await supabase
          .from('produk')
          .insert([productData]);
        
        if (error) throw error;
        alert('Produk berhasil ditambahkan!');
      }

      closeModal();
      fetchProducts();
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        const { error } = await supabase
          .from('produk')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        fetchProducts();
      } catch (err) {
        alert('Error: ' + err.message);
      }
    }
  };

  const openModal = (product = null) => {
    if (product) {
      setFormData(product);
      setImagePreview(product.gambar);
    } else {
      setFormData({
        id: null,
        nama_produk: '',
        harga: '',
        deskripsi: '',
        kategori: CATEGORIES[0],
        gambar: ''
      });
      setImagePreview('');
    }
    setImageFile(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageFile(null);
    setImagePreview('');
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
          <button className="btn-primary" onClick={() => openModal()}>
            <Plus size={18} /> Tambah Produk
          </button>
        </div>

        <div className="table-container glass-card">
          {loading ? (
            <div className="loading-spinner">Loading data...</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Gambar</th>
                  <th>Nama Produk</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">Belum ada produk</td>
                  </tr>
                ) : (
                  products.map(product => (
                    <tr key={product.id}>
                      <td>
                        <img 
                          src={product.gambar || 'https://via.placeholder.com/50'} 
                          alt={product.nama_produk} 
                          className="table-img"
                        />
                      </td>
                      <td>{product.nama_produk}</td>
                      <td>
                        <span className="badge category-badge">{product.kategori}</span>
                      </td>
                      <td>Rp {product.harga.toLocaleString('id-ID')}</td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="btn-icon edit" 
                            onClick={() => openModal(product)}
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            className="btn-icon delete" 
                            onClick={() => handleDelete(product.id)}
                            title="Hapus"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <h3>{formData.id ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
            
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label>Nama Produk</label>
                <input 
                  type="text" 
                  name="nama_produk" 
                  value={formData.nama_produk} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Harga (Rp)</label>
                <input 
                  type="number" 
                  name="harga" 
                  value={formData.harga} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Kategori</label>
                <select 
                  name="kategori" 
                  value={formData.kategori} 
                  onChange={handleInputChange}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Deskripsi</label>
                <textarea 
                  name="deskripsi" 
                  value={formData.deskripsi} 
                  onChange={handleInputChange} 
                  rows="3"
                  required 
                ></textarea>
              </div>

              <div className="form-group">
                <label>Gambar Produk</label>
                <div className="file-upload">
                  <input 
                    type="file" 
                    id="image-upload" 
                    accept="image/*" 
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload" className="file-upload-label">
                    <ImageIcon size={20} /> Pilih Gambar
                  </label>
                </div>
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}
              </div>

              <button type="submit" className="btn-primary w-100" disabled={uploading}>
                {uploading ? 'Menyimpan...' : 'Simpan Produk'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

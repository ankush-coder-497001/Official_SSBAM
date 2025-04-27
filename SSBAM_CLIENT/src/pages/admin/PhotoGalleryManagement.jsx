import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaImage } from 'react-icons/fa';

const PhotoGalleryManagement = () => {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhotos([...photos, { ...formData, id: Date.now() }]);
    setFormData({
      title: '',
      description: '',
      category: '',
      image: null
    });
  };

  const handleDelete = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Photo Gallery Management</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your photo gallery content</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
          <FaPlus className="mr-2" /> Add Photo
        </button>
      </div>

      {/* Add Photo Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              required
            >
              <option value="">Select Category</option>
              <option value="campus">Campus</option>
              <option value="events">Events</option>
              <option value="students">Students</option>
              <option value="faculty">Faculty</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors">
            <div className="space-y-1 text-center">
              <FaImage className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    accept="image/*"
                    required
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Upload Photo
          </button>
        </div>
      </form>

      {/* Photos Grid */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-w-16 aspect-h-9">
                {photo.image && (
                  <img
                    src={URL.createObjectURL(photo.image)}
                    alt={photo.title}
                    className="object-cover w-full h-48"
                  />
                )}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-900">{photo.title}</h4>
                <p className="text-sm text-gray-500">{photo.category}</p>
                <p className="mt-2 text-gray-600">{photo.description}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(photo.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryManagement; 
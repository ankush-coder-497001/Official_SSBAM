import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaPlay, FaImage, FaLink } from 'react-icons/fa';

const VideoGalleryManagement = () => {
  const [videos, setVideos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    videoUrl: '',
    thumbnail: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideos([...videos, { ...formData, id: Date.now() }]);
    setFormData({
      title: '',
      description: '',
      category: '',
      videoUrl: '',
      thumbnail: null
    });
  };

  const handleDelete = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-indigo-700">Video Gallery Management</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your video gallery content</p>
        </div>
       
      </div>

      {/* Add Video Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full px-4 py-2 rounded-lg border border-blue-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-4 py-2 rounded-lg border border-blue-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
        required
      >
        <option value="">Select Category</option>
        <option value="events">Events</option>
        <option value="lectures">Lectures</option>
        <option value="campus">Campus</option>
        <option value="interviews">Interviews</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
    <textarea
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      rows="3"
      className="w-full outline-none px-4 py-2 rounded-lg border border-blue-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
      required
    />
  </div>

  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaLink className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="url"
        value={formData.videoUrl}
        onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
        placeholder="Enter YouTube or Vimeo URL"
        className="w-full pl-10 px-4 py-2 rounded-lg border border-blue-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
        required
      />
    </div>
  </div>

  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail Image</label>
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-blue-400 rounded-lg hover:border-indigo-500 transition-colors">
      <div className="space-y-1 text-center">
        <FaImage className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600 justify-center">
          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <span>Upload a file</span>
            <input
              type="file"
              className="sr-only"
              onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
              accept="image/*"
              required
            />
          </label>
          <p className="pl-2">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  </div>

  <div className="mt-6">
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
    >
      Add Video
    </button>
  </div>
</form>


      {/* Videos Grid */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium text-indigo-700 mb-4">Gallery Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-w-16 aspect-h-9">
                {video.thumbnail && (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(video.thumbnail)}
                      alt={video.title}
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-70 transition-colors">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-900">{video.title}</h4>
                <p className="text-sm text-gray-500">{video.category}</p>
                <p className="mt-2 text-gray-600">{video.description}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(video.id)}
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

export default VideoGalleryManagement; 
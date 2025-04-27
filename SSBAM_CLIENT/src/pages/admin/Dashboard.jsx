import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FaNewspaper, 
  FaBook, 
  FaImages, 
  FaVideo, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome
} from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', icon: <FaHome />, path: '/admin/dashboard' },
    { title: 'News Management', icon: <FaNewspaper />, path: '/admin/news' },
    { title: 'Courses & Fees', icon: <FaBook />, path: '/admin/courses' },
    { title: 'Photo Gallery', icon: <FaImages />, path: '/admin/photos' },
    { title: 'Video Gallery', icon: <FaVideo />, path: '/admin/videos' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-indigo-800 text-white transition-all duration-300 ease-in-out relative`}
      >
        <div className="p-4 flex justify-between items-center border-b border-indigo-700">
          <h2 className={`${isSidebarOpen ? 'block' : 'hidden'} text-xl font-bold`}>Admin Panel</h2>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-4 py-3 transition-colors ${
                location.pathname === item.path
                  ? 'bg-indigo-700 text-white'
                  : 'hover:bg-indigo-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`${isSidebarOpen ? 'ml-4' : 'hidden'} font-medium`}>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-indigo-700">
          <button className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-indigo-700 transition-colors rounded-lg">
            <FaSignOutAlt />
            <span className={`${isSidebarOpen ? 'ml-4' : 'hidden'}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
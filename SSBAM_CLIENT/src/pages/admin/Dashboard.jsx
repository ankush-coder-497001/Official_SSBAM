import React, { useEffect, useState } from "react";
import {
  FaNewspaper,
  FaBook,
  FaImages,
  FaVideo,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";
import NewsManagement from "./NewsManagement";
import CoursesManagement from "./CoursesManagement";
import PhotoGalleryManagement from "./PhotoGalleryManagement";
import VideoGalleryManagement from "./VideoGalleryManagement";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("News Management");

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      title: "News Management",
      icon: <FaNewspaper />,
      component: <NewsManagement />,
    },
    {
      title: "Courses & Fees",
      icon: <FaBook />,
      component: <CoursesManagement />,
    },
    {
      title: "Photo Gallery",
      icon: <FaImages />,
      component: <PhotoGalleryManagement />,
    },
    {
      title: "Video Gallery",
      icon: <FaVideo />,
      component: <VideoGalleryManagement />,
    },
  ];

  const getActiveComponent = () => {
    const found = menuItems.find((item) => item.title === activeMenu);
    return found ? found.component : null;
  };

  return (
    <div className="min-h-screen">
      <div className="h-20 bg-indigo-900"></div> {/* Navbar placeholder */}
      <div className="flex h-[90vh]">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-15"
          } bg-indigo-800 text-white transition-all duration-300 ease-in-out relative`}
        >
          <div className="p-4 flex justify-between items-center border-b border-indigo-700 md:">
            <h2
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } text-xl font-bold`}
            >
              Admin Panel
            </h2>
            {/* <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button> */}
          </div>

          <nav className="mt-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveMenu(item.title)}
                className={`flex items-center px-4 py-3 transition-colors cursor-pointer ${
                  activeMenu === item.title
                    ? "bg-indigo-700 text-white"
                    : "hover:bg-indigo-700"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`${isSidebarOpen ? "ml-4" : "hidden"} font-medium`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t border-indigo-700">
            <button className="flex items-center w-full lg:px-4 py-3 text-red-400 hover:bg-indigo-700 transition-colors rounded-lg cursor-pointer">
              <FaSignOutAlt />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Logout
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="max-w-7xl mx-auto">{getActiveComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

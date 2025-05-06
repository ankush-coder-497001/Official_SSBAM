import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useAdminAuth } from "../context/AdminAuthContext";
import AdminLoginDialog from "./AdminLoginDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAdminAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownItems = {
    about: [
      { name: "About SSBAM", path: "/about-ssbam" },
      { name: "Recognition and Accreditations", path: "/recognition" },
      { name: "Administrative and Staff", path: "/administrative-staff" },
      { name: "Infrastructure", path: "/infrastructure" },
      { name: "Governing Body", path: "/governing-body" },
    ],
    courses: [
      { name: "UG Diploma", path: "/ug-diploma" },
      { name: "UG Degree", path: "/ug-degree" },
      { name: "PG Diploma", path: "/pg-diploma" },
      { name: "PG Degree", path: "/pg-degree" },
      { name: "Authorized Research Center", path: "/research-center" },
      { name: "Authorized Study Center", path: "/study-center" },
    ],
    department: [
      { name: "CS & IT", path: "/cs-it" },
      { name: "Physical Science", path: "/physical-science" },
      { name: "Life Science", path: "/life-science" },
      { name: "Commerce and Management", path: "/commerce-management" },
      { name: "Arts and Social Science", path: "/arts-social-science" },
      { name: "Education", path: "/education" },
    ],
    student: [
      { name: "Admission Notification", path: "/admission-notification" },
      { name: "Syllabus", path: "/syllabus" },
      { name: "Student Profile", path: "/student-profile" },
      { name: "Orientation", path: "/orientation" },
      { name: "Feedback", path: "/feedback" },
      { name: "Award and Achievements", path: "/awards-achievements" },
      { name: "Add-on Courses", path: "/addon-courses" },
    ],
    gallery: [
      { name: "Photo Gallery", path: "/photo-gallery" },
      { name: "Video Gallery", path: "/video-gallery" },
    ],
    academics: [
      { name: "Academic Calendar", path: "/academic-calendar" },
      { name: "Annual Action Plan", path: "/annual-action-plan" },
      { name: "Time Table", path: "/time-table" },
      { name: "Rules and Regulation", path: "/rules-regulation" },
      { name: "Fee Structure", path: "/fee-structure" },
    ],
    compliance: [
      { name: "NAAC", path: "/naac" },
      { name: "IQAC", path: "/iqac" },
      { name: "AISHE & RUSA", path: "/aishe" },
      { name: "ACTE", path: "/acte" },
    ],
  };

  const Dropdown = ({ items, isOpen }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const handleLogin = async (credentials) => {
    const success = await login(credentials);
    if (success) {
      setIsLoginDialogOpen(false);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#271C7B] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-yellow-600 transition-colors"
            >
              SSBAM College
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link
                to="/"
                className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "about" ? null : "about"
                    )
                  }
                >
                  About Us{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.about.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Courses Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "courses" ? null : "courses"
                    )
                  }
                >
                  Courses Offered{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.courses.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Department Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "department" ? null : "department"
                    )
                  }
                >
                  Department{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.department.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Student Corner Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "student" ? null : "student"
                    )
                  }
                >
                  Student Corner{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ">
                  {dropdownItems.student.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gallery Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "gallery" ? null : "gallery"
                    )
                  }
                >
                  Gallery{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.gallery.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "academics" ? null : "academics"
                    )
                  }
                >
                  Academics{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.academics.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Compliance Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "compliance" ? null : "compliance"
                    )
                  }
                >
                  Compliance{" "}
                  <FaChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems.compliance.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="text-white hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>

              {/* Admin Login/Dashboard Button */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/admin/dashboard"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="cursor-pointer text-red-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginDialogOpen(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-colors"
                >
                  Admin Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-2xl text-white hover:text-indigo-600 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-300 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Dropdowns */}
              {Object.entries(dropdownItems).map(([key, items]) => (
                <div key={key} className="relative">
                  <button
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 flex items-center justify-between"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === key ? null : key)
                    }
                  >
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                    <FaChevronDown className="ml-1" />
                  </button>
                  {activeDropdown === key && (
                    <div className="pl-4">
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-indigo-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdminLoginDialog
        isOpen={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
        onLogin={handleLogin}
      />
    </nav>
  );
};

export default Navbar;

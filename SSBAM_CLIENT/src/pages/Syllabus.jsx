import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaClipboardList, FaTimes } from "react-icons/fa";

const Syllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for courses
  const courses = [
    {
      id: 1,
      name: "Bachelor of Science (B.Sc.)",
      duration: "3 Years",
      syllabus: "/syllabus/bsc.jpg",
    },
    {
      id: 2,
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      syllabus: "/syllabus/bcom.jpg",
    },
    {
      id: 3,
      name: "Bachelor of Arts (B.A.)",
      duration: "3 Years",
      syllabus: "/syllabus/ba.jpg",
    },
    {
      id: 4,
      name: "Master of Science (M.Sc.)",
      duration: "2 Years",
      syllabus: "/syllabus/msc.jpg",
    },
    {
      id: 5,
      name: "Master of Commerce (M.Com)",
      duration: "2 Years",
      syllabus: "/syllabus/mcom.jpg",
    },
    {
      id: 6,
      name: "Master of Arts (M.A.)",
      duration: "2 Years",
      syllabus: "/syllabus/ma.jpg",
    },
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative h-64 bg-indigo-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 text-sm mb-3 hover:text-blue-500 transition"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Course Syllabus
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
              <FaClipboardList className="text-indigo-600" />
              Available Courses
            </h2>
            <p className="text-gray-600 mb-8">
              Click on any course to view its detailed syllabus. The syllabus is
              provided in PDF format and can be downloaded for reference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openModal(course)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    Duration: {course.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedCourse.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(90vh-8rem)]">
              <img
                src={selectedCourse.syllabus}
                alt={`${selectedCourse.name} Syllabus`}
                className="w-full h-auto"
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a
                href={selectedCourse.syllabus}
                download
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Download Syllabus
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Syllabus;

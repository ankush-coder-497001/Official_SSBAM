import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBook,
  FaLaptop,
  FaUserGraduate,
  FaDoorOpen,
  FaBookOpen,
  FaClipboardList,
} from "react-icons/fa";
import { GrSupport } from "react-icons/gr";

const StudyCenter = () => {
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
              Study Center
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-indigo-600" /> Overview
              </h2>
              <p className="text-gray-600 mb-4">
                Our Study Center provides a conducive environment for students
                to focus on their academic pursuits. We offer various resources
                and support services to enhance the learning experience.
              </p>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2 ">
                <FaClipboardList className="text-indigo-600" /> Resources
              </h2>
              <ul className="list-none space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaBook className="mr-2 text-indigo-600" /> Library Access
                </li>
                <li className="flex items-center">
                  <FaDoorOpen className="mr-2 text-indigo-600" /> Study Rooms
                </li>
                <li className="flex items-center">
                  <FaLaptop className="mr-2 text-indigo-600" /> Online Resources
                </li>
                <li className="flex items-center">
                  <FaUserGraduate className="mr-2 text-indigo-600" /> Academic
                  Support
                </li>
              </ul>
            </motion.div>

            {/* Support Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <GrSupport className="text-indigo-600" /> Support Services
              </h2>
              <p className="text-gray-600 mb-6">
                Our Study Center offers various support services, including
                tutoring, counseling, and academic advising, to help students
                achieve their educational goals.
              </p>

              {/* Optional CTA Button */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudyCenter;

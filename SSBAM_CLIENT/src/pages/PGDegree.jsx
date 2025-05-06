import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaBookOpen,
  FaClipboardCheck,
  FaClipboardList,
  FaRegFileAlt,
} from "react-icons/fa";

const PGDegree = () => {
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
              PG Degree Programs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-800">
                <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                  <FaBookOpen className="text-indigo-600" /> Overview
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our PG Degree programs offer advanced education in various
                disciplines. These programs are designed to equip students with
                the knowledge and skills necessary for their future careers.
              </p>
            </motion.div>

            {/* Available Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-800">
                <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                  <FaClipboardList className="text-indigo-600" /> Available
                  Programs
                </h2>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Master of Science in Computer Science</li>
                <li>Master of Business Administration</li>
                <li>Master of Engineering</li>
                <li>Master of Arts</li>
              </ul>
            </motion.div>

            {/* Admission Requirements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-800">
                <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                  <FaRegFileAlt className="text-indigo-600" /> Admission
                  Requirements
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To apply for our PG Degree programs, students must have
                completed their undergraduate education with a minimum GPA of
                3.0. Additional requirements may vary by program.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PGDegree;

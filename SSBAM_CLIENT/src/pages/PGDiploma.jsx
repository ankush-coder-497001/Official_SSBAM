import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookOpen,
  FaClipboardList,
  FaRegFileAlt,
} from "react-icons/fa";

const PGDiploma = () => {
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
              PG Diploma Programs
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
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-3">
                <FaBookOpen className="text-indigo-600 text-xl" /> Overview
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our PG Diploma programs are designed for graduates seeking
                advanced knowledge and skills in specific fields. These programs
                are tailored to meet industry standards and prepare students for
                successful careers.
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
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-3">
                <FaClipboardList className="text-indigo-600 text-xl" /> Available Programs
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>PG Diploma in Computer Science</li>
                <li>PG Diploma in Business Administration</li>
                <li>PG Diploma in Engineering</li>
                <li>PG Diploma in Arts</li>
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
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-3">
                <FaRegFileAlt className="text-indigo-600 text-xl" /> Admission Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To apply for our PG Diploma programs, students must have
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

export default PGDiploma;

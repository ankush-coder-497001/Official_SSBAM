import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaClipboardList, FaRegFileAlt } from 'react-icons/fa';

const UGDiploma = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50">
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
              UG Diploma Programs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-indigo-600" /> Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our UG Diploma programs are designed to equip students with industry-relevant skills and practical knowledge.
                These courses bridge the gap between education and employment, ensuring a strong career foundation.
              </p>
            </motion.div>

            {/* Available Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaClipboardList className="text-indigo-600" /> Available Programs
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>DCA</strong> – Diploma in Computer Applications
                </li>
                {/* You can add more diploma programs here */}
              </ul>
            </motion.div>

            {/* Admission Requirements Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaRegFileAlt className="text-indigo-600" /> Admission Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Candidates must have successfully completed their 10+2 (high school) education from a recognized board to be eligible for our UG Diploma programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UGDiploma;

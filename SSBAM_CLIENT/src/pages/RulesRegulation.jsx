import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAddressCard, FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";

const RulesRegulation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative h-64 bg-indigo-600">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 text-sm mb-3 hover:text-blue-500 transition"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Rules & Regulations
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
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-indigo-800" /> Overview
              </h2>
              <p className="text-gray-600 mb-4">
                Our Rules & Regulations are designed to ensure a safe,
                respectful, and conducive environment for learning. They outline
                the expectations and responsibilities of students, faculty, and
                staff.
              </p>
            </motion.div>

            {/* Rules Section */}
            <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8"
                       >
                         <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                         <FaPenRuler className="text-indigo-800" />Rules</h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Attendance: Minimum 75% required</li>
                <li>Academic Integrity: No plagiarism or cheating</li>
                <li>Behavior: Respectful and professional conduct</li>
                <li>Dress Code: Appropriate attire for academic settings</li>
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
             <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                             <FaAddressCard className="text-indigo-800" />
                             Contact Us
                           </h2>
              <p className="text-gray-600">
                For any queries regarding the rules and regulations, please
                contact our administration office at{" "}
                <a
                  href="mailto:admin@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  admin@college.edu
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesRegulation;

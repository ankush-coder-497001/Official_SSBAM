import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAddressCard, FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { MdFunctions } from "react-icons/md";

const IQAC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative h-64 bg-indigo-700">
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
              Internal Quality Assurance Cell (IQAC)
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-indigo-800" /> Overview
              </h2>
              <p className="text-gray-600 mb-4">
                The Internal Quality Assurance Cell (IQAC) is responsible for
                ensuring and enhancing the quality of education and academic
                activities at our institution. It works towards continuous
                improvement and excellence.
              </p>
            </motion.div>

            {/* Functions Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <MdFunctions className="text-indigo-800 text-4xl" />
                Functions
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Develop and apply quality benchmarks</li>
                <li>
                  Facilitate the creation of a learner-centric environment
                </li>
                <li>
                  Organize workshops and seminars on quality-related themes
                </li>
                <li>Document and disseminate best practices</li>
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
                For any queries regarding IQAC, please contact our quality
                assurance office at{" "}
                <a
                  href="mailto:iqac@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  iqac@college.edu
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

export default IQAC;

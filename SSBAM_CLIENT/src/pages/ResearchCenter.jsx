import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLightbulb,
  FaFlask,
  FaUniversity,
} from "react-icons/fa";

const ResearchCenter = () => {
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
              Research Center
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
                <FaLightbulb className="text-3xl mr-3" />
                <h2 className="text-3xl font-bold">Overview</h2>
              </div>
              <p className="text-gray-600">
                Our Research Center is dedicated to fostering innovation and
                academic excellence. We provide a platform for students and
                faculty to engage in cutting-edge research across various
                disciplines.
              </p>
            </motion.div>

            {/* Research Areas Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-800">
                <FaFlask className="text-3xl mr-3" />
                <h2 className="text-3xl font-bold">Research Areas</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Computer Science</li>
                <li>Business Administration</li>
                <li>Engineering</li>
                <li>Arts</li>
              </ul>
            </motion.div>

            {/* Facilities Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-800">
                <FaUniversity className="text-3xl mr-3" />
                <h2 className="text-3xl font-bold">Facilities</h2>
              </div>
              <p className="text-gray-600">
                Our Research Center is equipped with state-of-the-art facilities
                to support research activities. We provide access to advanced
                laboratories, libraries, and collaborative spaces for
                researchers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchCenter;

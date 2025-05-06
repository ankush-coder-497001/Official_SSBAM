import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GiLaurelCrown } from "react-icons/gi";

const StudentProfile = () => {
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
              Student Profile
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
                Our Student Profile section provides information about the
                student body, including demographics, achievements, and
                opportunities for involvement in campus activities.
              </p>
            </motion.div>

            {/* Demographics Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <MdGroups className="text-indigo-800 text-5xl" />
                Demographics
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Total Students: 5000+</li>
                <li>International Students: 500+</li>
                <li>Student-Faculty Ratio: 15:1</li>
                <li>Gender Ratio: 50:50</li>
              </ul>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-6 flex gap-2 items-center">
              <GiLaurelCrown size={24} className="text-indigo-800"/>
                Achievements
              </h2>
              <p className="text-gray-600">
                Our students have achieved significant milestones in academics,
                sports, and extracurricular activities. We celebrate their
                success and encourage others to strive for excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentProfile;

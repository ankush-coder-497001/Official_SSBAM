import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAddressCard, FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { SiOpencontainersinitiative } from "react-icons/si";

const AnnualActionPlan = () => {
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
              className="inline-flex items-center text-white mb-4 hover:text-indigo-200 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Annual Action Plan
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
                Our Annual Action Plan outlines the strategic initiatives and
                goals for the upcoming academic year. It is designed to enhance
                the quality of education and student experience.
              </p>
            </motion.div>

            {/* Initiatives Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <SiOpencontainersinitiative className="text-indigo-800" />
                Initiatives
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Enhance Academic Programs</li>
                <li>Improve Campus Facilities</li>
                <li>Strengthen Research Activities</li>
                <li>Promote Student Engagement</li>
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
                For any queries regarding the Annual Action Plan, please contact
                our planning office at{" "}
                <a
                  href="mailto:planning@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  planning@college.edu
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

export default AnnualActionPlan;

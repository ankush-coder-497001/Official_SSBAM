import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAddressCard,
  FaArrowLeft,
  FaBookOpen,
  FaChalkboardTeacher,
  FaClipboardList,
} from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

const CommerceManagement = () => {
  // Sample data for faculty
  const faculty = [
    {
      name: "Rakesh Kumar Sen",
      designation: "Head of Department",
      qualification: "Ph.D. in Management",
      specialization: "Strategic Management & Finance",
      image: "http://ssbam.co.in/teacher_info/image/rakesh_sen.jpeg",
    },
    {
      name: "Prof. Neha Patel",
      designation: "Associate Professor",
      qualification: "Ph.D. in Commerce",
      specialization: "Accounting & Financial Management",
      image: "http://ssbam.co.in/teacher_info/image/jaspreet_kour.jpg",
    },
    {
      name: "Dr. Sanjay Verma",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Marketing",
      specialization: "Digital Marketing & Consumer Behavior",
      image: "http://ssbam.co.in/teacher_info/image/shubham.jpg",
    },
  ];

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
              Commerce & Management
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
              className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-indigo-600" /> Overview
              </h2>
              <p className="text-gray-600 mb-4">
                The Department of Commerce and Management offers cutting-edge
                programs in business, finance, and management. We focus on
                developing future business leaders with strong analytical and
                decision-making skills.
              </p>
            </motion.div>

            {/* Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaClipboardList className="text-indigo-600" />
                Programs
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Bachelor of Commerce (B.Com)</li>
                <li>Bachelor of Business Administration (BBA)</li>
                <li>Master of Commerce (M.Com)</li>
                <li>Master of Business Administration (MBA)</li>
              </ul>
            </motion.div>

            {/* Research Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <GiArchiveResearch className="text-indigo-600" />
                Research Areas
              </h2>
              <p className="text-gray-600">
                Our department conducts research in various areas of business
                and management, including finance, marketing, organizational
                behavior, and entrepreneurship. Students are encouraged to
                participate in research projects and industry collaborations.
              </p>
            </motion.div>

            {/* Faculty Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaChalkboardTeacher className="text-indigo-600 " />
                Our Faculty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faculty.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-80 bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold mb-2">
                        {member.designation}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {member.qualification}
                      </p>
                      <p className="text-gray-600">
                        Specialization: {member.specialization}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <FaAddressCard className="text-indigo-600" />
                Contact Us
              </h2>
              <p className="text-gray-600">
                For any queries regarding our Commerce and Management programs,
                please contact our department office at{" "}
                <a
                  href="mailto:commerce.management@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  commerce.management@college.edu
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

export default CommerceManagement;

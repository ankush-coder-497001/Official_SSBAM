import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiArchiveResearch } from "react-icons/gi";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaServer,
  FaBookOpen,
  FaClipboardList,
  FaAddressCard,
} from "react-icons/fa";

const CSIT = () => {
  const courses = [
    {
      name: "B.Sc. Computer Science",
      duration: "3 Years",
      seats: 60,
      description:
        "Comprehensive program covering core computer science concepts and programming.",
    },
    {
      name: "BCA",
      duration: "3 Years",
      seats: 60,
      description:
        "Professional degree focusing on computer applications and software development.",
    },
    {
      name: "M.Sc. Computer Science",
      duration: "2 Years",
      seats: 30,
      description:
        "Advanced studies in computer science with specialization options.",
    },
    {
      name: "PGDCA",
      duration: "1 Year",
      seats: 40,
      description:
        "Post-graduate diploma in computer applications for career advancement.",
    },
  ];

  const facilities = [
    {
      icon: <FaLaptopCode className="w-8 h-8 text-indigo-600" />,
      name: "Computer Labs",
      description:
        "State-of-the-art computer laboratories with latest hardware and software.",
    },
    {
      icon: <FaServer className="w-8 h-8 text-indigo-600" />,
      name: "Server Room",
      description:
        "Dedicated server infrastructure for practical learning and projects.",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 text-indigo-600" />,
      name: "Smart Classrooms",
      description: "Modern classrooms equipped with digital learning tools.",
    },
    {
      icon: <FaUserGraduate className="w-8 h-8 text-indigo-600" />,
      name: "Research Lab",
      description: "Advanced research facilities for students and faculty.",
    },
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department",
      qualification: "Ph.D. in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "http://ssbam.co.in/teacher_info/image/vivek_gupta.jpg",
    },
    {
      name: "Mrs. Neetu Singh",
      designation: "Assistant Professor",
      qualification: "M.Tech in Computer Science",
      specialization: "Database Management & Web Technologies",
      image: "http://ssbam.co.in/teacher_info/image/neetu_singh.jpg",
    },
    {
      name: "Rahul Kundu",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Information Technology",
      specialization: "Cybersecurity & Network Administration",
      image: "http://ssbam.co.in/teacher_info/image/rahul_kundu.JPG",
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
              Computer Science & Information Technology
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
                <FaBookOpen className="text-indigo-600" /> Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Computer Science and Information Technology department
                offers cutting-edge programs designed to prepare students for
                the rapidly evolving tech industry. We focus on both theoretical
                knowledge and practical skills.
              </p>
            </motion.div>

            {/* Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaClipboardList className="text-indigo-600" />
                Programs
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Bachelor of Computer Science</li>
                <li>Master of Computer Science</li>
                <li>Bachelor of Information Technology</li>
                <li>Master of Information Technology</li>
              </ul>
            </motion.div>

            {/* Research Areas Section */}
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
              <p className="text-gray-600 mb-4">
                Our department is actively involved in research across various
                domains of computer science and information technology. Students
                have the opportunity to work on cutting-edge projects and
                collaborate with industry partners.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science and Big Data Analytics</li>
                <li>Cybersecurity and Network Security</li>
                <li>Software Engineering and Development</li>
                <li>Cloud Computing and Distributed Systems</li>
              </ul>
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
                For any queries regarding our CSIT programs, please contact our
                department office at{" "}
                <a
                  href="mailto:csit@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  csit@college.edu
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

export default CSIT;

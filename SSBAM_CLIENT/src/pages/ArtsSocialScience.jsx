import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ArtsSocialScience = () => {
  // Sample data for faculty
  const faculty = [
    {
      name: 'Dr. Rajendra Kumar',
      designation: 'Head of Department',
      qualification: 'Ph.D. in Political Science',
      specialization: 'International Relations & Public Policy',
      image: '/placeholder-faculty1.jpg',
    },
    {
      name: 'Prof. Smita Desai',
      designation: 'Associate Professor',
      qualification: 'Ph.D. in Sociology',
      specialization: 'Social Development & Gender Studies',
      image: '/placeholder-faculty2.jpg',
    },
    {
      name: 'Dr. Arun Sharma',
      designation: 'Assistant Professor',
      qualification: 'Ph.D. in History',
      specialization: 'Modern Indian History & Cultural Studies',
      image: '/placeholder-faculty3.jpg',
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Arts & Social Science</h1>
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
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 mb-4">
                The Department of Arts and Social Sciences offers comprehensive programs in various disciplines including History, Political Science, Sociology, and Economics. Our focus is on developing critical thinking and analytical skills in students.
              </p>
            </motion.div>

            {/* Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Programs</h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Bachelor of Arts (History)</li>
                <li>Bachelor of Arts (Political Science)</li>
                <li>Bachelor of Arts (Sociology)</li>
                <li>Master of Arts in various disciplines</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research</h2>
              <p className="text-gray-600">
                Our department conducts research in various areas of social sciences, including social development, public policy, cultural studies, and economic development. Students are encouraged to participate in research projects and seminars.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Faculty</h2>
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
                    <div className="h-48 bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-indigo-600 font-semibold mb-2">{member.designation}</p>
                      <p className="text-gray-600 mb-2">{member.qualification}</p>
                      <p className="text-gray-600">Specialization: {member.specialization}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600">
                For any queries regarding our Arts and Social Science programs, please contact our department office at <a href="mailto:arts.social@college.edu" className="text-indigo-600 hover:underline">arts.social@college.edu</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsSocialScience; 
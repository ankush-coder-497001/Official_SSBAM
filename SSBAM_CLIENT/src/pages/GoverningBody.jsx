import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUserTie, FaEnvelope, FaPhone } from 'react-icons/fa';

const GoverningBody = () => {
  const members = [
    {
      name: 'Dr. Ramesh Kumar',
      position: 'Chairman',
      email: 'chairman@ssbamcollege.edu',
      phone: '+91 1234567890',
      image: '/images/governing/chairman.jpg',
      description: 'Leading the college with vision and dedication for over 15 years.',
    },
    {
      name: 'Mrs. Sunita Verma',
      position: 'Vice Chairman',
      email: 'vicechairman@ssbamcollege.edu',
      phone: '+91 1234567891',
      image: '/images/governing/vice-chairman.jpg',
      description: 'Expert in educational administration and policy making.',
    },
    {
      name: 'Mr. Amit Patel',
      position: 'Secretary',
      email: 'secretary@ssbamcollege.edu',
      phone: '+91 1234567892',
      image: '/images/governing/secretary.jpg',
      description: 'Managing college operations and strategic planning.',
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Treasurer',
      email: 'treasurer@ssbamcollege.edu',
      phone: '+91 1234567893',
      image: '/images/governing/treasurer.jpg',
      description: 'Overseeing financial management and resource allocation.',
    },
    {
      name: 'Prof. Rajesh Singh',
      position: 'Academic Advisor',
      email: 'academic@ssbamcollege.edu',
      phone: '+91 1234567894',
      image: '/images/governing/academic.jpg',
      description: 'Guiding academic policies and curriculum development.',
    },
    {
      name: 'Mrs. Anjali Gupta',
      position: 'Member',
      email: 'member@ssbamcollege.edu',
      phone: '+91 1234567895',
      image: '/images/governing/member.jpg',
      description: 'Contributing to college development and student welfare.',
    },
  ];

  const committees = [
    {
      title: 'Academic Committee',
      description: 'Oversees curriculum development, academic standards, and faculty development.',
    },
    {
      title: 'Finance Committee',
      description: 'Manages financial planning, budgeting, and resource allocation.',
    },
    {
      title: 'Infrastructure Committee',
      description: 'Plans and monitors campus development and maintenance.',
    },
    {
      title: 'Student Welfare Committee',
      description: 'Focuses on student support services and extracurricular activities.',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Governing Body</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Governing Body</h2>
          <p className="text-xl text-gray-600">
            Dedicated leaders guiding the college towards excellence
          </p>
        </motion.div>

        {/* Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  </div>
                  <p className="text-indigo-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FaEnvelope className="w-4 h-4 text-gray-500 mr-2" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="w-4 h-4 text-gray-500 mr-2" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Committees Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{committee.title}</h3>
                <p className="text-gray-600">{committee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GoverningBody; 
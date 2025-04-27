import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUserTie, FaEnvelope, FaPhone } from 'react-icons/fa';

const AdministrativeStaff = () => {
  const staffMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Principal',
      email: 'principal@ssbamcollege.edu',
      phone: '+91 1234567890',
      image: '/images/staff/principal.jpg',
      description: 'With over 20 years of experience in education and administration.',
    },
    {
      name: 'Mrs. Priya Sharma',
      position: 'Vice Principal',
      email: 'viceprincipal@ssbamcollege.edu',
      phone: '+91 1234567891',
      image: '/images/staff/vice-principal.jpg',
      description: 'Expert in academic planning and student welfare.',
    },
    {
      name: 'Mr. Amit Patel',
      position: 'Administrative Officer',
      email: 'admin@ssbamcollege.edu',
      phone: '+91 1234567892',
      image: '/images/staff/admin-officer.jpg',
      description: 'Handling college administration and operations.',
    },
    {
      name: 'Mrs. Sunita Verma',
      position: 'Accounts Officer',
      email: 'accounts@ssbamcollege.edu',
      phone: '+91 1234567893',
      image: '/images/staff/accounts.jpg',
      description: 'Managing college finances and accounts.',
    },
    {
      name: 'Mr. Ramesh Singh',
      position: 'Librarian',
      email: 'library@ssbamcollege.edu',
      phone: '+91 1234567894',
      image: '/images/staff/librarian.jpg',
      description: 'Overseeing library resources and digital learning materials.',
    },
    {
      name: 'Mrs. Anjali Gupta',
      position: 'Student Welfare Officer',
      email: 'welfare@ssbamcollege.edu',
      phone: '+91 1234567895',
      image: '/images/staff/welfare.jpg',
      description: 'Focusing on student support and development programs.',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Administrative Staff</h1>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Administrative Team</h2>
          <p className="text-xl text-gray-600">
            Dedicated professionals working together to ensure the smooth functioning of the college
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
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
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaUserTie className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{staff.name}</h3>
                </div>
                <p className="text-indigo-600 font-medium mb-4">{staff.position}</p>
                <p className="text-gray-600 mb-6">{staff.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope className="w-4 h-4 text-gray-500 mr-2" />
                    <a
                      href={`mailto:${staff.email}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {staff.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="w-4 h-4 text-gray-500 mr-2" />
                    <a
                      href={`tel:${staff.phone}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {staff.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdministrativeStaff; 
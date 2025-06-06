import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBuilding, FaLaptop, FaBook, FaFlask, FaWifi, FaParking } from 'react-icons/fa';

const Infrastructure = () => {
  const facilities = [
    {
      icon: <FaBuilding className="w-8 h-8 text-indigo-600" />,
      title: 'Modern Classrooms',
      description: 'Well-equipped classrooms with smart boards and audio-visual facilities',
      image: 'http://ssbam.co.in/images/ac4.jpg',
    },
    {
      icon: <FaLaptop className="w-8 h-8 text-indigo-600" />,
      title: 'Computer Labs',
      description: 'State-of-the-art computer laboratories with high-speed internet',
      image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      icon: <FaBook className="w-8 h-8 text-indigo-600" />,
      title: 'Library',
      description: 'Extensive collection of books, journals, and digital resources',
      image: 'http://ssbam.co.in/images/lib1.jpeg',
    },
    {
      icon: <FaFlask className="w-8 h-8 text-indigo-600" />,
      title: 'Science Labs',
      description: 'Well-equipped laboratories for practical learning and research',
      image: 'http://ssbam.co.in/images/physics(1).jpg',
    },
    {
      icon: <FaWifi className="w-8 h-8 text-indigo-600" />,
      title: 'Wi-Fi Campus',
      description: 'High-speed internet connectivity across the campus',
      image: 'http://ssbam.co.in/images/sr1.jpg',
    },
    {
      icon: <FaParking className="w-8 h-8 text-indigo-600" />,
      title: 'Parking Facility',
      description: 'Ample parking space for students and staff',
      image: 'https://images.unsplash.com/photo-1677468679336-3f4763b91eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwY29sbGVnZSUyMHBhcmtpbmd8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const campusFeatures = [
    {
      title: 'Green Campus',
      description: 'Eco-friendly environment with lush greenery and sustainable practices',
    },
    {
      title: 'Sports Complex',
      description: 'Modern sports facilities for various indoor and outdoor games',
    },
    {
      title: 'Cafeteria',
      description: 'Hygienic food court serving nutritious meals and snacks',
    },
    {
      title: 'Auditorium',
      description: 'Spacious auditorium for events, seminars, and cultural activities',
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
              className="inline-flex items-center text-blue-400 mt-2 mb-4 hover:text-blue-500 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Campus Infrastructure</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Facilities Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
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
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {facility.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-2">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Campus Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">Campus Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Infrastructure; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaAward, FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Recognition = () => {
  const recognitions = [
    {
      icon: <FaAward className="w-8 h-8 text-indigo-600" />,
      title: 'NAAC Accreditation',
      description: 'Accredited with "A" Grade by National Assessment and Accreditation Council',
      year: '2020',
    },
    {
      icon: <FaUniversity className="w-8 h-8 text-indigo-600" />,
      title: 'University Recognition',
      description: 'Recognized by the State University and affiliated with major educational boards',
      year: '1990',
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-indigo-600" />,
      title: 'UGC Recognition',
      description: 'Recognized under Section 2(f) and 12(B) of the UGC Act, 1956',
      year: '1995',
    },
  ];

  const achievements = [
    {
      title: 'Research Excellence',
      description: 'Recognized for outstanding research contributions in various fields',
      year: '2022',
    },
    {
      title: 'Innovation Hub',
      description: 'Designated as an Innovation Hub by the Ministry of Education',
      year: '2021',
    },
    {
      title: 'Best College Award',
      description: 'Awarded Best College in the State for academic excellence',
      year: '2019',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Recognition & Accreditations</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Recognitions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Official Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">{recognition.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recognition.title}</h3>
                <p className="text-gray-600 mb-4">{recognition.description}</p>
                <span className="text-indigo-600 font-medium">Since {recognition.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <span className="text-indigo-600 font-medium">Awarded in {achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Recognition; 
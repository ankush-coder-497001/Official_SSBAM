import { motion } from 'framer-motion';

const ClubCard = ({ club, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 text-3xl">
          {club.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{club.name}</h3>
        <p className="text-gray-600 text-center">{club.description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ClubCard; 
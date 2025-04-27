import { motion } from 'framer-motion';

const NewsMarquee = () => {
  // Sample news items - replace with actual news
  const newsItems = [
    'Admissions open for the academic year 2024-25',
    'College ranked among top 10 colleges in the state',
    'New research center inaugurated by Honorable Minister',
    'Annual cultural fest "Jagriti" to be held next month',
    'Sports meet scheduled for next week',
    'Guest lecture by renowned scientist Dr. Sharma',
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {newsItems.map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-white font-medium">{item}</span>
            <span className="mx-4 text-white">•</span>
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {newsItems.map((item, index) => (
          <div key={`duplicate-${index}`} className="inline-flex items-center mx-8">
            <span className="text-white font-medium">{item}</span>
            <span className="mx-4 text-white">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsMarquee; 
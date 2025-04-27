import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Components
import HeroSection from '../components/HeroSection';
import ClubCard from '../components/ClubCard';
import NewsMarquee from '../components/NewsMarquee';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for background images
  const backgroundImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
  ];

  // Auto-change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Sample data for clubs
  const clubs = [
    { name: 'Science Club', description: 'Promoting scientific temper and research', icon: '🔬' },
    { name: 'Eco Club', description: 'Environmental awareness and sustainability', icon: '🌱' },
    { name: 'Gender Issue Club', description: 'Promoting gender equality and awareness', icon: '⚖️' },
    { name: 'Cultural Society', description: 'Celebrating cultural diversity', icon: '🎭' },
    { name: 'Red Cross', description: 'Humanitarian services and first aid', icon: '➕' },
    { name: 'Social Work', description: 'Community service and social welfare', icon: '🤝' },
    { name: 'IT Club', description: 'Technology and innovation', icon: '💻' },
    { name: 'Youth Activity Society', description: 'Youth empowerment and activities', icon: '🌟' },
    { name: 'Sports Club', description: 'Sports and physical fitness', icon: '⚽' },
    { name: 'NSS', description: 'National Service Scheme activities', icon: '🇮🇳' },
  ];

  // Sample data for activities
  const activities = [
    {
      title: 'Inspiring Programs',
      description: 'Motivational and career development programs',
      image: '/placeholder-inspire.jpg',
    },
    {
      title: 'AbhiPrerna',
      description: 'Student development and leadership programs',
      image: '/placeholder-abhiprerna.jpg',
    },
    {
      title: 'Exhibition',
      description: 'Annual science and technology exhibition',
      image: '/placeholder-exhibition.jpg',
    },
    {
      title: 'Jagriti',
      description: 'Cultural and literary festival',
      image: '/placeholder-jagriti.jpg',
    },
    {
      title: 'Project Vaibhav',
      description: 'Research and innovation projects',
      image: '/placeholder-vaibhav.jpg',
    },
  ];

  // Sample data for publications
  const publications = [
    {
      title: 'Research Zone',
      description: 'Academic research and publications',
      link: '/research-zone',
    },
    {
      title: 'Srijan',
      description: 'College magazine and literary works',
      link: '/srijan',
    },
    {
      title: 'Prospectus',
      description: 'College information and admission details',
      link: '/prospectus',
    },
    {
      title: 'Press Release',
      description: 'Latest news and announcements',
      link: '/press-release',
    },
  ];

  // Sample data for leadership
  const leadership = [
    {
      name: 'Dr. John Smith',
      position: 'Chairman',
      image: '/placeholder-chairman.jpg',
      description: 'Leading the institution with vision and dedication',
    },
    {
      name: 'Dr. Sarah Johnson',
      position: 'Secretary',
      image: '/placeholder-secretary.jpg',
      description: 'Managing administrative excellence',
    },
    {
      name: 'Dr. Michael Brown',
      position: 'Principal',
      image: '/placeholder-principal.jpg',
      description: 'Guiding academic excellence and innovation',
    },
  ];

  // Sample data for news
  const news = [
    {
      title: 'New Academic Programs Announced',
      date: 'March 15, 2024',
      image: '/placeholder-news1.jpg',
      description: 'Introducing new courses in emerging technologies',
    },
    {
      title: 'Research Grant Awarded',
      date: 'March 10, 2024',
      image: '/placeholder-news2.jpg',
      description: 'College receives major research funding',
    },
    {
      title: 'Student Achievement',
      date: 'March 5, 2024',
      image: '/placeholder-news3.jpg',
      description: 'Students win national competition',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* News Marquee */}
      <section className="bg-indigo-600 text-white py-2">
        <NewsMarquee />
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the visionaries leading our institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="mt-4 text-xl text-gray-600">
              Stay updated with our latest happenings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Clubs & Societies</h2>
            <p className="mt-4 text-xl text-gray-600">
              Join our vibrant community of clubs and societies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clubs.map((club, index) => (
              <ClubCard key={index} club={club} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Other Activities</h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our diverse range of activities and programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
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
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Publications</h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our research and academic publications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.description}</p>
                <Link
                  to="/publications"
                  className="text-indigo-600 hover:text-indigo-800 inline-flex items-center transition-colors"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
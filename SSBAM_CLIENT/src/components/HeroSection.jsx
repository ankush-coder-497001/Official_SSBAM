import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for background images
  const backgroundImages = [
    'Hero1.jpg',
    'Hero2.png'
  ];

  // Auto-change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image with Transition */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4, // Reduced opacity for background image
        }}
      />
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          {/* College Logos */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/images/college-logo1.png"
              alt="College Logo 1"
              className="h-24 w-auto drop-shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="/images/college-logo2.png"
              alt="College Logo 2"
              className="h-24 w-auto drop-shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to SS BAM College
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Excellence in Education Since 1990
          </p>
          <Link
            to="/about-ssbam"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full inline-flex items-center transition-colors shadow-lg"
          >
            Learn More <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 
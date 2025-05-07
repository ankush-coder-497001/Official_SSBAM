import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* College Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-indigo-400" />
                <p>
                Digma, Banaras Road
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-indigo-400" />
                <p>Ambikapur, Surguja, CG</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-indigo-400" />
                <p>principal@ssbam.co.in</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-ssbam" className="hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-indigo-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/admission-notification" className="hover:text-indigo-400 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.796952239328!2d83.16599967509613!3d23.15919537907833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989a16e28c8a885%3A0xdef4e5df9705ccb6!2sShri%20Sai%20Baba%20Aadarsh%20Mahavidyalaya!5e1!3m2!1sen!2sin!4v1745838219574!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/ssbam.co.in"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>© {currentYear} SSBAM. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  // Sample data for Research Zone publications
  const researchPublications = [
    {
      title: 'Advancements in Educational Technology Integration',
      authors: 'Dr. Meera Sharma, Prof. Ramesh Kumar',
      journal: 'International Journal of Educational Research',
      year: '2023',
      abstract: 'This research paper explores innovative approaches to integrating technology in higher education, focusing on the impact of digital tools on student engagement and learning outcomes.',
      link: '#',
      pdf: '/publications/research1.pdf',
    },
    {
      title: 'Social Development and Economic Growth: A Case Study',
      authors: 'Dr. Rajendra Kumar, Prof. Smita Desai',
      journal: 'Journal of Social Sciences',
      year: '2023',
      abstract: 'An analysis of the relationship between social development initiatives and economic growth in developing regions, with specific focus on educational institutions.',
      link: '#',
      pdf: '/publications/research2.pdf',
    },
  ];

  // Sample data for Srijan (College Magazine)
  const srijanPublications = [
    {
      title: 'Srijan 2023-24',
      authors: 'Editorial Board',
      journal: 'Annual College Magazine',
      year: '2024',
      abstract: 'The annual college magazine featuring student articles, poetry, artwork, and achievements from the academic year 2023-24.',
      link: '#',
      pdf: '/publications/srijan2024.pdf',
    },
    {
      title: 'Srijan 2022-23',
      authors: 'Editorial Board',
      journal: 'Annual College Magazine',
      year: '2023',
      abstract: 'The annual college magazine showcasing student creativity, literary works, and college events from the academic year 2022-23.',
      link: '#',
      pdf: '/publications/srijan2023.pdf',
    },
  ];

  // Sample data for Prospectus
  const prospectusPublications = [
    {
      title: 'Academic Prospectus 2024-25',
      authors: 'Admission Committee',
      journal: 'College Prospectus',
      year: '2024',
      abstract: 'Comprehensive guide to academic programs, admission procedures, facilities, and opportunities available at SS BAM College for the academic year 2024-25.',
      link: '#',
      pdf: '/publications/prospectus2024.pdf',
    },
    {
      title: 'Program Brochure 2024-25',
      authors: 'Academic Department',
      journal: 'Program Guide',
      year: '2024',
      abstract: 'Detailed information about undergraduate and postgraduate programs, including curriculum, specializations, and career prospects.',
      link: '#',
      pdf: '/publications/programguide2024.pdf',
    },
  ];

  // Sample data for Press Releases
  const pressReleases = [
    {
      title: 'New Academic Programs Announced',
      authors: 'Public Relations Office',
      journal: 'Press Release',
      year: '2024',
      abstract: 'SS BAM College announces the launch of new academic programs in emerging technologies and interdisciplinary studies.',
      link: '#',
      pdf: '/publications/press1.pdf',
    },
    {
      title: 'Research Grant Awarded',
      authors: 'Research Department',
      journal: 'Press Release',
      year: '2024',
      abstract: 'College receives major research funding for innovative projects in sustainable development and technology.',
      link: '#',
      pdf: '/publications/press2.pdf',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Publications</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Zone Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Zone</h2>
            <div className="grid grid-cols-1 gap-8">
              {researchPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{pub.authors}</p>
                  <p className="text-gray-600 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 mb-4">{pub.abstract}</p>
                  <div className="flex gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Publication
                    </a>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Srijan Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Srijan - College Magazine</h2>
            <div className="grid grid-cols-1 gap-8">
              {srijanPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{pub.authors}</p>
                  <p className="text-gray-600 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 mb-4">{pub.abstract}</p>
                  <div className="flex gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Magazine
                    </a>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prospectus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Prospectus & Program Guides</h2>
            <div className="grid grid-cols-1 gap-8">
              {prospectusPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{pub.authors}</p>
                  <p className="text-gray-600 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 mb-4">{pub.abstract}</p>
                  <div className="flex gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Prospectus
                    </a>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Press Releases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases</h2>
            <div className="grid grid-cols-1 gap-8">
              {pressReleases.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{pub.authors}</p>
                  <p className="text-gray-600 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-gray-600 mb-4">{pub.abstract}</p>
                  <div className="flex gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Read More
                    </a>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For any queries regarding our publications or to request additional information, please contact our publications department.
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:publications@college.edu" className="text-indigo-600 hover:underline">publications@college.edu</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications; 
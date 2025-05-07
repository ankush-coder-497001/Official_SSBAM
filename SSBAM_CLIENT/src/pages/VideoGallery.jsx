import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAddressCard, FaArrowLeft, FaFilm } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

const videos = [
  {
    title: "Campus Tour 2023",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Annual Sports Day",
    src: "https://www.youtube.com/embed/L_jWHffIx5E",
  },
  {
    title: "Science Fair Highlights",
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    title: "Cultural Festival",
    src: "https://www.youtube.com/embed/yzTuBuRdAyA",
  },
  {
    title: "Alumni Meet",
    src: "https://www.youtube.com/embed/fLexgOxsZu0",
  },
  {
    title: "Workshop Series",
    src: "https://www.youtube.com/embed/nHhAEkG1yQ0",
  },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-gray-100">
      {/* Header Section */}
      <section className="relative h-64 bg-indigo-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 text-sm mb-3 hover:text-blue-500 transition"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Video Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {/* Video Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <FaFilm className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">
                  Featured Videos
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-[1.02]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <p className="text-lg font-semibold text-white truncate">
                        {video.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <FaAddressCard className="text-indigo-800" />
                Contact Us
              </h2>
              <p className="text-gray-600">
                Looking for specific footage or want to submit your own content?
                <br />
                Contact our media team at 
                <a
                  href="mailto:media@college.edu"
                  className="text-indigo-600 hover:underline"
                >
                  media@college.edu
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AboutSSBAM = () => {
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
              className="inline-flex mt-2 items-center text-blue-400 mb-4 hover:text-blue-500 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Shri Sai Baba Aadarsh Mahavidyalaya
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* History Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                🏛️ Our History
              </h2>
              <section className="mb-12">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Shri Sai Baba Aadarsh Mahavidyalaya was established on{" "}
                  <span className="font-semibold">15th August 2003</span> in the
                  tribal district of{" "}
                  <span className="font-semibold">Surguja</span> at{" "}
                  <span className="font-semibold">Ambikapur</span>,
                  Chhattisgarh. The college aims to uplift the standards of
                  higher education by offering{" "}
                  <span className="italic">quality education</span> to students
                  from diverse and rural backgrounds.
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
                  <li>
                    Recognized by Directorate of Higher Education, Chhattisgarh
                    (College Code: 3432)
                  </li>
                  <li>
                    Permanently affiliated to Sant Gahira Guru Vishwavidyalaya
                    (College Code: 007)
                  </li>
                  <li>
                    Recognized by University Grants Commission (UGC) under
                    Section 2(f)
                  </li>
                  <li>
                    Managed by Shree Shirdi Sai Shikshan Samiti, Ambikapur,
                    Surguja
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Since its inception, the college is dedicated to not just
                  academic excellence but also to the
                  <span className="italic"> holistic development</span> of
                  students, nurturing them into
                  <span className="italic"> competent</span> and
                  <span className="italic"> socially responsible</span>{" "}
                  individuals.
                </p>
              </section>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                🎯 Our Vision
              </h2>
              <section>
                <ul className="list-disc pl-8 space-y-4 text-gray-700 text-lg">
                  <li>
                    🌟 Create a benchmark of excellence in higher education in
                    tribal and rural regions.
                  </li>
                  <li>
                    🌟 Provide holistic education focusing on academics, moral
                    values, and personal growth.
                  </li>
                  <li>
                    🌟 Equip students with modern education through smart
                    classrooms and V-SAT technology.
                  </li>
                  <li>
                    🌟 Instill discipline, ethics, and practical skills
                    alongside academic learning.
                  </li>
                  <li>
                    🌟 Bridge the education gap for tribal and rural students
                    with affordable quality education.
                  </li>
                  <li>
                    🌟 Prepare students for competitive global environments
                    while preserving Indian cultural values.
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  The college aspires to be an{" "}
                  <span className="font-semibold">educational hub</span> that
                  transforms students into
                  <span className="italic">
                    {" "}
                    capable and socially responsible citizens
                  </span>{" "}
                  of tomorrow.
                </p>
              </section>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Academic Excellence
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Provide quality education through innovative teaching
                      methods
                    </li>
                    <li>• Foster research and critical thinking</li>
                    <li>• Maintain high academic standards</li>
                    <li>• Promote interdisciplinary learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Student Development
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Nurture holistic development</li>
                    <li>• Encourage extracurricular activities</li>
                    <li>• Provide career guidance and placement support</li>
                    <li>• Foster leadership and teamwork</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600">Successful Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600">Faculty Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSSBAM;

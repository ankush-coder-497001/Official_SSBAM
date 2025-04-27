import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

const FeeStructure = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for courses with fee structure
  const courses = [
    {
      id: 1,
      name: 'Bachelor of Science (B.Sc.)',
      duration: '3 Years',
      fees: {
        tuitionFee: '₹25,000',
        examinationFee: '₹2,000',
        libraryFee: '₹1,000',
        laboratoryFee: '₹3,000',
        totalFee: '₹31,000',
        paymentSchedule: [
          { installment: '1st', amount: '₹15,500', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹15,500', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
    {
      id: 2,
      name: 'Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      fees: {
        tuitionFee: '₹22,000',
        examinationFee: '₹2,000',
        libraryFee: '₹1,000',
        totalFee: '₹25,000',
        paymentSchedule: [
          { installment: '1st', amount: '₹12,500', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹12,500', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
    {
      id: 3,
      name: 'Bachelor of Arts (B.A.)',
      duration: '3 Years',
      fees: {
        tuitionFee: '₹20,000',
        examinationFee: '₹2,000',
        libraryFee: '₹1,000',
        totalFee: '₹23,000',
        paymentSchedule: [
          { installment: '1st', amount: '₹11,500', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹11,500', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
    {
      id: 4,
      name: 'Master of Science (M.Sc.)',
      duration: '2 Years',
      fees: {
        tuitionFee: '₹30,000',
        examinationFee: '₹3,000',
        libraryFee: '₹1,500',
        laboratoryFee: '₹4,000',
        totalFee: '₹38,500',
        paymentSchedule: [
          { installment: '1st', amount: '₹19,250', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹19,250', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
    {
      id: 5,
      name: 'Master of Commerce (M.Com)',
      duration: '2 Years',
      fees: {
        tuitionFee: '₹28,000',
        examinationFee: '₹3,000',
        libraryFee: '₹1,500',
        totalFee: '₹32,500',
        paymentSchedule: [
          { installment: '1st', amount: '₹16,250', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹16,250', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
    {
      id: 6,
      name: 'Master of Arts (M.A.)',
      duration: '2 Years',
      fees: {
        tuitionFee: '₹26,000',
        examinationFee: '₹3,000',
        libraryFee: '₹1,500',
        totalFee: '₹30,500',
        paymentSchedule: [
          { installment: '1st', amount: '₹15,250', dueDate: 'At the time of admission' },
          { installment: '2nd', amount: '₹15,250', dueDate: 'Before start of 2nd semester' },
        ],
      },
    },
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Fee Structure</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Courses</h2>
            <p className="text-gray-600 mb-8">
              Click on any course to view its detailed fee structure. Fees are subject to change as per college regulations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openModal(course)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-indigo-600 font-semibold">Duration: {course.duration}</p>
                  <p className="text-gray-600 mt-2">Total Fee: {course.fees.totalFee}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.name}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[calc(90vh-8rem)]">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Fee Breakdown</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Tuition Fee</p>
                      <p className="font-semibold">{selectedCourse.fees.tuitionFee}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Examination Fee</p>
                      <p className="font-semibold">{selectedCourse.fees.examinationFee}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Library Fee</p>
                      <p className="font-semibold">{selectedCourse.fees.libraryFee}</p>
                    </div>
                    {selectedCourse.fees.laboratoryFee && (
                      <div>
                        <p className="text-gray-600">Laboratory Fee</p>
                        <p className="font-semibold">{selectedCourse.fees.laboratoryFee}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600">Total Fee</p>
                    <p className="text-2xl font-bold text-indigo-600">{selectedCourse.fees.totalFee}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Payment Schedule</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-semibold">Installment</div>
                    <div className="font-semibold">Amount</div>
                    <div className="font-semibold">Due Date</div>
                    {selectedCourse.fees.paymentSchedule.map((schedule, index) => (
                      <React.Fragment key={index}>
                        <div>{schedule.installment}</div>
                        <div>{schedule.amount}</div>
                        <div>{schedule.dueDate}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-gray-600">
                Note: All fees are subject to change as per college regulations. Additional charges may apply for specific programs or facilities.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FeeStructure; 
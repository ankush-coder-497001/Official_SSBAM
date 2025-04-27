import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AdminAuthProvider } from './context/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutSSBAM from './pages/AboutSSBAM';
import Recognition from './pages/Recognition';
import AdministrativeStaff from './pages/AdministrativeStaff';
import Infrastructure from './pages/Infrastructure';
import GoverningBody from './pages/GoverningBody';
import UGDiploma from './pages/UGDiploma';
import UGDegree from './pages/UGDegree';
import PGDiploma from './pages/PGDiploma';
import PGDegree from './pages/PGDegree';
import ResearchCenter from './pages/ResearchCenter';
import StudyCenter from './pages/StudyCenter';
import CSIT from './pages/CSIT';
import PhysicalScience from './pages/PhysicalScience';
import LifeScience from './pages/LifeScience';
import CommerceManagement from './pages/CommerceManagement';
import ArtsSocialScience from './pages/ArtsSocialScience';
import Education from './pages/Education';
import AdmissionNotification from './pages/AdmissionNotification';
import Syllabus from './pages/Syllabus';
import StudentProfile from './pages/StudentProfile';
import Orientation from './pages/Orientation';
import Feedback from './pages/Feedback';
import AwardsAchievements from './pages/AwardsAchievements';
import AddonCourses from './pages/AddonCourses';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import AcademicCalendar from './pages/AcademicCalendar';
import AnnualActionPlan from './pages/AnnualActionPlan';
import TimeTable from './pages/TimeTable';
import RulesRegulation from './pages/RulesRegulation';
import FeeStructure from './pages/FeeStructure';
import NAAC from './pages/NAAC';
import IQAC from './pages/IQAC';
import AISHE from './pages/AISHE';
import ACTE from './pages/ACTE';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Dashboard from './pages/admin/Dashboard';
import NewsManagement from './pages/admin/NewsManagement';
import CoursesManagement from './pages/admin/CoursesManagement';
import PhotoGalleryManagement from './pages/admin/PhotoGalleryManagement';
import VideoGalleryManagement from './pages/admin/VideoGalleryManagement';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AdminAuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-ssbam" element={<AboutSSBAM />} />
              <Route path="/recognition" element={<Recognition />} />
              <Route path="/administrative-staff" element={<AdministrativeStaff />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/governing-body" element={<GoverningBody />} />
              <Route path="/ug-diploma" element={<UGDiploma />} />
              <Route path="/ug-degree" element={<UGDegree />} />
              <Route path="/pg-diploma" element={<PGDiploma />} />
              <Route path="/pg-degree" element={<PGDegree />} />
              <Route path="/research-center" element={<ResearchCenter />} />
              <Route path="/study-center" element={<StudyCenter />} />
              <Route path="/cs-it" element={<CSIT />} />
              <Route path="/physical-science" element={<PhysicalScience />} />
              <Route path="/life-science" element={<LifeScience />} />
              <Route path="/commerce-management" element={<CommerceManagement />} />
              <Route path="/arts-social-science" element={<ArtsSocialScience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/admission-notification" element={<AdmissionNotification />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/student-profile" element={<StudentProfile />} />
              <Route path="/orientation" element={<Orientation />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/awards-achievements" element={<AwardsAchievements />} />
              <Route path="/addon-courses" element={<AddonCourses />} />
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/academic-calendar" element={<AcademicCalendar />} />
              <Route path="/annual-action-plan" element={<AnnualActionPlan />} />
              <Route path="/time-table" element={<TimeTable />} />
              <Route path="/rules-regulation" element={<RulesRegulation />} />
              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/naac" element={<NAAC />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/aishe" element={<AISHE />} />
              <Route path="/acte" element={<ACTE />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publications" element={<Publications />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/news"
                element={
                  <ProtectedRoute>
                    <NewsManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/courses"
                element={
                  <ProtectedRoute>
                    <CoursesManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/photos"
                element={
                  <ProtectedRoute>
                    <PhotoGalleryManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/videos"
                element={
                  <ProtectedRoute>
                    <VideoGalleryManagement />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AdminAuthProvider>
  );
};

export default App;

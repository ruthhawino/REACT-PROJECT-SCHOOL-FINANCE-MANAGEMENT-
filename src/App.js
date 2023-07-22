import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import StudentManagement from './components/StudentManagement/StudentManagement';
import TeacherManagement from './components/TeacherManagement/TeacherManagement';
import GuardianManagement from './components/GuardianManagement/GuardianManagement';
import AttendanceTracker from './components/StudentManagement/AttendanceTracker';
import ClassScheduling from './components/Class Scheduling/ClassScheduling';
import GradeManagement from './components/GradeManagement/GradeManagement';
import CourseManagement from './components/CourseManagement/CourseManagement';
import ExaminationAssessment from './components/Examination&Assessment/ExaminationAssessment';
import CommunicationCollaboration from './components/Communication&Collaboration/CommunicationCollaboration';
import FinancialManagement from './components/FinancialManagement/FinancialManagement';
import LibraryManagement from './components/LibraryManagement/LibraryManagement';
import StaffManagement from './components/StaffManagement/StaffManagement';
import TransportationManagement from './components/TransportationManagement/TransportationManagement';
import ReportingAnalyics from './components/Reporting and Analytics/ReportingAnalyics';
import EventManagement from './components/EventsManagement/EventManagement';
import TendersMnagement from './components/TendersManagement/TendersMnagement';
import StockManagement from './components/StockManagement/StockManagement';
import TODAllocations from './components/TeacherOnDutyAllocations/TODAllocations';
import TimetableManagement from './components/Timetable Management/TimetableManagement';
import UserAuthentication from './components/UserAuthentication';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        {/* <Route path="/" element={<UserAuthentication />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/student-management" element={<StudentManagement />} />
          <Route path="/teacher-management" element={<TeacherManagement />} />
          <Route path="/guardian-management" element={<GuardianManagement />} />
          <Route path="/attendance-tracking" element={<AttendanceTracker />} />
          <Route path="/class-scheduling" element={<ClassScheduling />} />
          <Route path="/grade-management" element={<GradeManagement />} />
          <Route path="/course-management" element={<CourseManagement />} />
          <Route path="/examination-assessment" element={<ExaminationAssessment />} />
          <Route path="/communication-collaboration" element={<CommunicationCollaboration />} />
          <Route path="/financial-management" element={<FinancialManagement />} />
          <Route path="/library-management" element={<LibraryManagement />} />
          <Route path="/staff-management" element={<StaffManagement />} />
          <Route path="/transportation-management" element={<TransportationManagement />} />
          <Route path="/reporting-analytics" element={<ReportingAnalyics/>} />
          <Route path="/events-management" element={<EventManagement />} />
          <Route path="/tenders-management" element={<TendersMnagement />} />
          <Route path="/stock-keeping" element={<StockManagement />} />
          <Route path="/teacher-on-duty-allocations" element={<TODAllocations/>} />
          <Route path="/timetable-management" element={<TimetableManagement/>} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

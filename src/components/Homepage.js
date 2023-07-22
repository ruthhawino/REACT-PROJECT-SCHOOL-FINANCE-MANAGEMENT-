



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BsCalendarEvent, BsPencil, BsLayers, BsClipboard, BsChatSquareDots, BsBusFill, BsPersonSquare, BsBookshelf, BsBarChart, BsPeopleFill, BsFileText, BsBook, BsBriefcaseFill, BsSearch, BsCalendar, BsGraphUp } from 'react-icons/bs';
// import { MdDirectionsCar } from 'react-icons/md';

// const componentsData = [
//     {
//       id: 1,
//       title: 'Student Management',
//       description: 'Manage student profiles, attendance, grades, discipline, and communication.',
//       icon: BsPeopleFill,
//       link: '/student-management',
//     },
//     {
//       id: 2,
//       title: 'Teacher Management',
//       description: 'Manage teacher profiles, class schedules, grades, and communication.',
//       icon: BsBook,
//       link: '/teacher-management',
//     },
//     {
//       id: 3,
//       title: 'Guardian Management',
//       description: 'Manage guardian profiles, payment history, and communication.',
//       icon: BsBriefcaseFill,
//       link: '/guardian-management',
//     },
//     {
//       id: 4,
//       title: 'Attendance Tracking',
//       description: 'Track student attendance, generate reports, and manage notifications.',
//       icon: BsCalendar,
//       link: '/attendance-tracking',
//     },
//     {
//       id: 5,
//       title: 'Class Scheduling',
//       description: 'Create and manage class schedules, room assignments, and schedule adjustments.',
//       icon: BsGraphUp,
//       link: '/class-scheduling',
//     },
//     {
//       id: 6,
//       title: 'Grade Management',
//       description: 'Manage student grades, progress reports, and perform grade analysis.',
//       icon: BsFileText,
//       link: '/grade-management',
//     },
//     {
//       id: 7,
//       title: 'Course Management',
//       description: 'Manage courses, course materials, assignments, and details.',
//       icon: BsBook,
//       link: '/course-management',
//     },
//     {
//       id: 8,
//       title: 'Examination and Assessment ',
//       description: 'Manage exams, schedules, grading, and analyze examination results.',
//       icon: BsSearch,
//       link: '/examination-assessment',
//     },
//     {
//       id: 10,
//       title: 'Communication and Collaboration',
//       description: 'Enable internal messaging, announcements, parent-teacher communication, and discussion forums.',
//       icon: BsChatSquareDots,
//       link: 'communication-collaboration',
//     },
//     {
//       id: 11,
//       title: 'Financial Management',
//       description: 'Manage fee management, payments, receipts, and financial reports.',
//       icon: BsBarChart,
//       link: '/financial-management',
//     },
//     {
//       id: 12,
//       title: 'Library Management',
//       description: 'Manage library catalog, book borrowing, reservations, and bookkeeping.',
//       icon: BsBookshelf,
//       link: '/library-management',
//     },
//     {
//       id: 13,
//       title: 'Staff Management',
//       description: 'Manage staff profiles, attendance, and communication.',
//       icon: BsPersonSquare,
//       link: '/staff-management',
//     },
//     {
//       id: 14,
//       title: 'Transportation Management',
//       description: 'Manage bus routes, student transportation tracking, and delay notifications.',
//       icon: MdDirectionsCar,
//       link: '/transportation-management',
//     },
//     {
//       id: 15,
//       title: 'Reporting and Analytics',
//       description: 'Generate reports, display dashboard, and visualize data for insights.',
//       icon: BsBarChart,
//       link: '/reporting-analytics',
//     },
//     {
//       id: 16,
//       title: 'Events Management',
//       description: 'Manage event calendars, details, registrations, and attendance.',
//       icon: BsCalendarEvent,
//       link: '/events-management',
//     },
//     {
//       id: 17,
//       title: 'Tenders Management',
//       description: 'Manage tender listings, details, submissions, evaluations, and awards.',
//       icon: BsPencil,
//       link: '/tenders-management',
//     },
//     {
//       id: 18,
//       title: 'Stock Keeping',
//       description: 'Manage stock inventory, items, details, entries, and requests.',
//       icon: BsLayers,
//       link: '/stock-keeping',
//     },
//     {
//       id: 19,
//       title: 'Teacher On-Duty Allocations',
//       description: 'Manage teacher on-duty schedules, allocations, and notifications.',
//       icon: BsClipboard,
//       link: '/teacher-on-duty-allocations',
//     },
  
  
//     // Add other components to the data source
//   ];

// function Homepage() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log('Search Query:', searchQuery);
//   };

//   const filteredComponents = componentsData.filter((component) =>
//     component.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-900 text-white">
//       <header className="bg-black py-6">
//         <div className="container mx-auto px-4"></div>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex mb-4">
//           <input
//             type="text"
//             placeholder="Search components"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
//           />
//           <button
//             type="submit"
//             onClick={handleSearchSubmit}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
//           >
//             <BsSearch className="inline-block text-xl" />
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredComponents.map((component, index) => (
//             <div
//               key={component.id}
//               className={`bg-gray-${index % 4 + 6}00 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300`}
//               style={{ backdropFilter: 'blur(8px)' }}
//             >
//               <h3 className="text-xl font-semibold mb-2">
//                 {React.createElement(component.icon, {
//                   className: 'inline-block mr-2 text-blue-400 text-xl',
//                 })}
//                 {component.title}
//               </h3>
//               <p className="text-gray-300">{component.description}</p>
//               <Link
//                 to={component.link}
//                 className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg block"
//               >
//                 Go to {component.title}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>
//       <footer className="bg-black py-4 text-center">
//         <p className="text-gray-500">University Management System &copy; 2023. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Homepage;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarEvent, BsPencil, BsLayers, BsClipboard, BsChatSquareDots, BsBusFill, BsPersonSquare, BsBookshelf, BsBarChart, BsPeopleFill, BsFileText, BsBook, BsBriefcaseFill, BsSearch, BsCalendar, BsGraphUp } from 'react-icons/bs';
import { MdDirectionsCar } from 'react-icons/md';


const componentsData = [
    {
      id: 1,
      title: 'Student Management',
      description: 'Manage student profiles, attendance, grades, discipline, and communication.',
      icon: BsPeopleFill,
      link: '/student-management',
    },
    {
      id: 2,
      title: 'Teacher Management',
      description: 'Manage teacher profiles, class schedules, grades, and communication.',
      icon: BsBook,
      link: '/teacher-management',
    },
    {
      id: 3,
      title: 'Guardian Management',
      description: 'Manage guardian profiles, payment history, and communication.',
      icon: BsBriefcaseFill,
      link: '/guardian-management',
    },
    {
      id: 4,
      title: 'Attendance Tracking',
      description: 'Track student attendance, generate reports, and manage notifications.',
      icon: BsCalendar,
      link: '/attendance-tracking',
    },
    {
      id: 5,
      title: 'Class Scheduling',
      description: 'Create and manage class schedules, room assignments, and schedule adjustments.',
      icon: BsGraphUp,
      link: '/class-scheduling',
    },
    {
      id: 6,
      title: 'Grade Management',
      description: 'Manage student grades, progress reports, and perform grade analysis.',
      icon: BsFileText,
      link: '/grade-management',
    },
    {
      id: 7,
      title: 'Course Management',
      description: 'Manage courses, course materials, assignments, and details.',
      icon: BsBook,
      link: '/course-management',
    },
    {
      id: 8,
      title: 'Examination and Assessment ',
      description: 'Manage exams, schedules, grading, and analyze examination results.',
      icon: BsSearch,
      link: '/examination-assessment',
    },
    {
      id: 10,
      title: 'Communication and Collaboration',
      description: 'Enable internal messaging, announcements, parent-teacher communication, and discussion forums.',
      icon: BsChatSquareDots,
      link: '/communication-collaboration',
    },
    {
      id: 11,
      title: 'Financial Management',
      description: 'Manage fee management, payments, receipts, and financial reports.',
      icon: BsBarChart,
      link: '/financial-management',
    },
    {
      id: 12,
      title: 'Library Management',
      description: 'Manage library catalog, book borrowing, reservations, and bookkeeping.',
      icon: BsBookshelf,
      link: '/library-management',
    },
    {
      id: 13,
      title: 'Staff Management',
      description: 'Manage staff profiles, attendance, and communication.',
      icon: BsPersonSquare,
      link: '/staff-management',
    },
    {
      id: 14,
      title: 'Transportation Management',
      description: 'Manage bus routes, student transportation tracking, and delay notifications.',
      icon: MdDirectionsCar,
      link: '/transportation-management',
    },
    {
      id: 15,
      title: 'Reporting and Analytics',
      description: 'Generate reports, display dashboard, and visualize data for insights.',
      icon: BsBarChart,
      link: '/reporting-analytics',
    },
    {
      id: 16,
      title: 'Events Management',
      description: 'Manage event calendars, details, registrations, and attendance.',
      icon: BsCalendarEvent,
      link: '/events-management',
    },
    {
      id: 17,
      title: 'Tenders Management',
      description: 'Manage tender listings, details, submissions, evaluations, and awards.',
      icon: BsPencil,
      link: '/tenders-management',
    },
    {
      id: 18,
      title: 'Stock Keeping',
      description: 'Manage stock inventory, items, details, entries, and requests.',
      icon: BsLayers,
      link: '/stock-keeping',
    },
    {
      id: 19,
      title: 'Teacher On-Duty Allocations',
      description: 'Manage teacher on-duty schedules, allocations, and notifications.',
      icon: BsClipboard,
      link: '/teacher-on-duty-allocations',
    },
    {
        id: 20,
        title: 'Timetable Management',
        description: 'Generate, edit, and view timetables for classes, subjects, and teachers.',
        icon: BsCalendar,
        link: '/timetable-management',
        }
    
  
  
    // Add other components to the data source
  ];

function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  const getRandomColor = () => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500',
      'bg-orange-500',
      'bg-gray-500',
      'bg-red-600',
      'bg-blue-600',
      'bg-green-600',
      'bg-yellow-600',
      'bg-purple-600',
      'bg-indigo-600',
      'bg-pink-600',
      'bg-teal-600',
      'bg-orange-600',
      'bg-gray-600',
      'bg-red-700',
      'bg-blue-700',
      'bg-green-700',
      'bg-yellow-700',
      'bg-purple-700',
      'bg-indigo-700',
      'bg-pink-700',
      'bg-teal-700',
      'bg-orange-700',
      'bg-gray-700',
      'bg-red-800',
      'bg-blue-800',
      'bg-green-800',
      'bg-yellow-800',
      'bg-purple-800',
      'bg-indigo-800',
      'bg-pink-800',
      'bg-teal-800',
      'bg-orange-800',
      'bg-gray-800',
      'bg-red-900',
      'bg-blue-900',
      'bg-green-900',
      'bg-yellow-900',
      'bg-purple-900',
      'bg-indigo-900',
      'bg-pink-900',
      'bg-teal-900',
      'bg-orange-900',
      'bg-gray-900',
    ];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  

  const filteredComponents = componentsData.filter((component) =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white">
      {/* <header className="bg-black py-6">
        <div className="container mx-auto px-4"></div>
      </header> */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search components"
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            onClick={handleSearchSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            <BsSearch className="inline-block text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredComponents.map((component) => (
            <div
              key={component.id}
              className={`p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ${getRandomColor()}`}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {React.createElement(component.icon, {
                  className: 'inline-block mr-2 text-blue-400 text-xl',
                })}
                {component.title}
              </h3>
              <p className="text-gray-300">{component.description}</p>
              <Link
  to={component.link}
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg block text-center"
>
  Go to {component.title}
</Link>

            </div>
          ))}
        </div>
      </main>
      <footer className="bg-black py-4 text-center">
        <p className="text-gray-500">University Management System &copy; 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;

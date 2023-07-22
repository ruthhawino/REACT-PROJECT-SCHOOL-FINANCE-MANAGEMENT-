import React, { useState, useEffect } from 'react';

function TeacherManagement() {
  const [teacherList, setTeacherList] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    teaches: '',
    schedule: '',
    age: '',
    quote: ''
  });

  useEffect(() => {
    fetchTeacherList();
  }, []);

  const fetchTeacherList = async () => {
    try {
      const response = await fetch('http://localhost:3000/teachers');
      const data = await response.json();
      setTeacherList(data);
    } catch (error) {
      console.error('Error fetching teacher list:', error);
    }
  };

  const handleEditTeacher = async () => {
    try {
      const response = await fetch(`http://localhost:3000/teachers/${selectedTeacher.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedTeacher),
      });

      if (response.ok) {
        const updatedTeacher = await response.json();
        // Handle the updatedTeacher data or update the state as needed
        console.log(updatedTeacher); // Log the updated teacher data for example
      } else {
        throw new Error('Failed to edit teacher');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const toggleEditFormVisibility = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value
    }));
  };

  const handleAddTeacher = async () => {
    try {
      const response = await fetch('http://localhost:3000/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTeacher)
      });

      if (response.ok) {
        // Teacher added successfully
        console.log('Teacher added:', newTeacher);

        // Reset the form
        setNewTeacher({
          name: '',
          email: '',
          phone: '',
          address: '',
          teaches: '',
          schedule: '',
          age: '',
          quote: ''
        });

        // Close the form
        toggleAddFormVisibility();

        // Refresh the teacher list
        fetchTeacherList();
      } else {
        console.error('Failed to add teacher:', response.status);
      }
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  const filteredTeacherList = teacherList.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {/* Teacher List Container */}
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="search" className="text-white">
            Search:
          </label>
          <input
            type="text"
            id="search"
            className="bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-3 py-2 w-full text-white"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <ul className="divide-y divide-gray-700">
          {filteredTeacherList.map((teacher) => (
            <li
              key={teacher.id}
              className={`${
                selectedTeacher && selectedTeacher.id === teacher.id
                  ? 'bg-gray-800'
                  : ''
              }`}
              onClick={() => handleTeacherClick(teacher)}
            >
              <div className="p-4 cursor-pointer">
                <h3 className="text-lg font-medium text-white">{teacher.name}</h3>
                <p className="text-gray-300">{teacher.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Teacher Form */}
      {isAddFormVisible && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-medium mb-4">Add Teacher</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newTeacher.name}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:ring-2 focus:ring-blue-600 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newTeacher.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:ring-2 focus:ring-blue-600 rounded-md px-3 py-2 w-full"
                />
              </div>
              {/* Add other fields here */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddTeacher}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Add Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Teacher Form */}
      {isEditFormVisible && selectedTeacher && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-medium mb-4">Edit Teacher</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={selectedTeacher.name}
                  onChange={(e) =>
                    setSelectedTeacher((prevTeacher) => ({
                      ...prevTeacher,
                      name: e.target.value
                    }))
                  }
                  className="border-gray-300 focus:ring-2 focus:ring-blue-600 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={selectedTeacher.email}
                  onChange={(e) =>
                    setSelectedTeacher((prevTeacher) => ({
                      ...prevTeacher,
                      email: e.target.value
                    }))
                  }
                  className="border-gray-300 focus:ring-2 focus:ring-blue-600 rounded-md px-3 py-2 w-full"
                />
              </div>
              {/* Add other fields here */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={toggleEditFormVisibility}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleEditTeacher}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Teacher Button */}
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          onClick={toggleAddFormVisibility}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Teacher
        </button>
      </div>
    </div>
  );
}

export default TeacherManagement;

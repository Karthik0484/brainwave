import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester6 = () => {
  // Define six subjects for Semester 6
  const subjects = [
    { name: 'Object Oriented Software Engineering' },
    { name: 'Data Warehousing' },
    { name: 'Network Security' },
    { name: 'Multimedia And Animation' },
    { name: 'Introduction To Industrial Engineering' },
    { name: '3D Printing And Design' }
  ];

  return (
    <SubjectList
      subjects={subjects}
      semesterLabel="Semester 6"
      semesterId="semester-6"
    />
  );
};

export default Semester6;

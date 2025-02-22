import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester4 = () => {
  // Define six subjects for Semester 4
  const subjects = [
    { name: 'Mathematics' },
    { name: 'Physics' },
    { name: 'Chemistry' },
    { name: 'Computer Science' },
    { name: 'Electronics' },
    { name: 'Mechanics' }
  ];

  return (
    <SubjectList
      subjects={subjects}
      semesterLabel="Semester 4"
      semesterId="semester-4"
    />
  );
};

export default Semester4;

import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester2 = () => {
  // Define six subjects for Semester 6
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
      semesterLabel="Semester 2"
      semesterId="semester-2"
    />
  );
};

export default Semester2;

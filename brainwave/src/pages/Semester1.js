import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester6 = () => {
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
      semesterLabel="Semester 6"
      semesterId="semester-6"
    />
  );
};

export default Semester6;

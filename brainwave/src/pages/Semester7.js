import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester7 = () => {
  // Define six subjects for Semester 7
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
      semesterLabel="Semester 7"
      semesterId="semester-7"
    />
  );
};

export default Semester7;

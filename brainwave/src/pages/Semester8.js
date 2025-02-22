import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester8 = () => {
  // Define six subjects for Semester 8
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
      semesterLabel="Semester 8"
      semesterId="semester-8"
    />
  );
};

export default Semester8;

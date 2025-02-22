import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester1 = () => {
  // Define six subjects for Semester 6
  const subjects = [
    { name: 'Professional English-1' },
    { name: 'Matrices and Calculus' },
    { name: 'Enginnering Physics' },
    { name: 'Enginnering chemistry' },
    { name: 'Problem Solving and Python Programming' },
    { name: 'Heritage of Tamils' }
  ];

  return (
    <SubjectList
      subjects={subjects}
      semesterLabel="Semester 1"
      semesterId="semester-1"
    />
  );
};

export default Semester1;

import React from 'react';
import SubjectList from '../components/SubjectList';

const Semester3 = () => {
  const subjects = [
    {
      name: 'Chemistry',
      resources: [
        { name: 'Chemistry Notes', type: 'pdf', link: '#' },
        { name: 'Chemistry Experiment Video', type: 'video', link: '#' }
      ]
    },
    {
      name: 'Biology',
      resources: [
        { name: 'Biology Notes', type: 'pdf', link: '#' },
        { name: 'Biology Lecture Video', type: 'video', link: '#' }
      ]
    }
  ];

  return <SubjectList subjects={subjects} semesterLabel="Semester 3" />;
};

export default Semester3;

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SubjectList = ({ subjects, semesterLabel, semesterId }) => {
  const navigate = useNavigate();

  const handleSubjectClick = (subjectName) => {
    // Navigate to the unit notes page for the selected subject
    navigate(`/subjects/${semesterId}/${subjectName}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {semesterLabel} - Subjects
      </Typography>
      <Grid container spacing={3}>
        {subjects.map((subject) => (
          <Grid item key={subject.name} xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleSubjectClick(subject.name)}
              style={{ cursor: 'pointer', padding: '20px' }}
            >
              <CardContent>
                <Typography variant="h5">{subject.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SubjectList;

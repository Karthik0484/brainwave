import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelectYearSemester = () => {
  // Updated years with emoji
  const years = ['🎓 1st Year', '🎓 2nd Year', '🎓 3rd Year', '🎓 4th Year'];
  // Updated semesters with emoji
  const semesters = [
    { id: 'semester-1', label: '📚 Semester 1' },
    { id: 'semester-2', label: '📚 Semester 2' },
    { id: 'semester-3', label: '📚 Semester 3' },
    { id: 'semester-4', label: '📚 Semester 4' },
    { id: 'semester-5', label: '📚 Semester 5' },
    { id: 'semester-6', label: '📚 Semester 6' },
    { id: 'semester-7', label: '📚 Semester 7' },
    { id: 'semester-8', label: '📚 Semester 8' }
  ];

  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();

  // Mapping: '🎓 1st Year' -> indices 0-1, '🎓 2nd Year' -> indices 2-3, etc.
  const yearMapping = {
    '🎓 1st Year': 0,
    '🎓 2nd Year': 1,
    '🎓 3rd Year': 2,
    '🎓 4th Year': 3
  };

  let availableSemesters = [];
  if (selectedYear) {
    const startIndex = yearMapping[selectedYear] * 2;
    availableSemesters = semesters.slice(startIndex, startIndex + 2);
  }

  const handleSemesterClick = (semesterId) => {
    if (semesterId) {
      navigate(`/subjects/${semesterId}`);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        {!selectedYear ? (
          <>
            <Typography variant="h4" gutterBottom>
              Select Year
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {years.map((year) => (
                <Grid item xs={12} sm={6} key={year}>
                  <Card
                    onClick={() => setSelectedYear(year)}
                    sx={{
                      cursor: 'pointer',
                      p: 2,
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">{year}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Select Semester
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {availableSemesters.map((sem) => (
                <Grid item xs={12} sm={6} key={sem.id}>
                  <Card
                    onClick={() => handleSemesterClick(sem.id)}
                    sx={{
                      cursor: 'pointer',
                      p: 2,
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">{sem.label}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SelectYearSemester;

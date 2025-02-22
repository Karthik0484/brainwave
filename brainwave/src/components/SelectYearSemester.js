import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelectYearSemester = () => {
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  // All eight semesters
  const allSemesters = [
    { id: 'semester-1', label: 'Semester 1' },
    { id: 'semester-2', label: 'Semester 2' },
    { id: 'semester-3', label: 'Semester 3' },
    { id: 'semester-4', label: 'Semester 4' },
    { id: 'semester-5', label: 'Semester 5' },
    { id: 'semester-6', label: 'Semester 6' },
    { id: 'semester-7', label: 'Semester 7' },
    { id: 'semester-8', label: 'Semester 8' }
  ];

  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();

  // Map each year to its corresponding two semesters:
  // 1st Year: indices 0-1, 2nd Year: indices 2-3, 3rd Year: indices 4-5, 4th Year: indices 6-7
  const yearMapping = {
    '1st Year': 0,
    '2nd Year': 1,
    '3rd Year': 2,
    '4th Year': 3
  };

  let availableSemesters = [];
  if (selectedYear) {
    const startIndex = yearMapping[selectedYear] * 2;
    availableSemesters = allSemesters.slice(startIndex, startIndex + 2);
  }

  const handleSemesterClick = (semesterId) => {
    if (semesterId) {
      navigate(`/subjects/${semesterId}`);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Step 1: Select Year */}
      {!selectedYear ? (
        <Grid container spacing={3} justifyContent="center">
          {years.map((year) => (
            <Grid item key={year} xs={12} sm={6} md={3}>
              <Card
                onClick={() => setSelectedYear(year)}
                style={{ cursor: 'pointer', padding: '20px' }}
              >
                <CardContent>
                  <Typography variant="h5">{year}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Step 2: Display only the relevant two semesters based on the selected year
        <Grid container spacing={3} justifyContent="center">
          {availableSemesters.map((sem) => (
            <Grid item key={sem.id} xs={12} sm={6} md={3}>
              <Card
                onClick={() => handleSemesterClick(sem.id)}
                style={{ cursor: 'pointer', padding: '20px' }}
              >
                <CardContent>
                  <Typography variant="h5">{sem.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SelectYearSemester;

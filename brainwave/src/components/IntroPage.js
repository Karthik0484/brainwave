import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/select');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          BrainWave
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your Gateway to Academic Resources
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGetStarted}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default IntroPage;

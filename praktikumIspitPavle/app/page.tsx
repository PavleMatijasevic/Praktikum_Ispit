import React from 'react';
import Image from 'next/image';
import { Container, Typography, Box } from '@mui/material';
import logo from '../public/images/logo.png'; 
import "../styles/global.css"

const HomePage = () => {
  return (
    <Container className="homepage-container">
      <Box className="logo-container">
        <Image src={logo} alt="Klinika Logo" className="logo" />
      </Box>
      <Typography variant="h1" component="h1" className="welcome-title">
        Dobrodošli na sajt klinike Pavle clinic
      </Typography>
      <Typography variant="h5" component="h2" className="welcome-subtitle">
        Vaše zdravlje je naša briga
      </Typography>
      <Typography variant="body1" component="p" className="description">
        Naša klinika pruža vrhunske medicinske usluge uz najmoderniju tehnologiju i iskusno osoblje. Brinemo se o vašem zdravlju i blagostanju.
      </Typography>
    </Container>
  );
};

export default HomePage;

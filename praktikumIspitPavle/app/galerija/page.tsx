"use client"
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GaleryCard from '../../components/GaleryCard';
import './Galery.css';

const slike = [
  {
    name: 'Operaciona sala',
    description: 'Najmodernije sale u gradu',
    image: '/images/operacionaSala.jpg',
  },
  {
    name: 'Laboratorija',
    description: 'Iskusni tehnicari koji vode veliku laboratoriju',
    image: '/images/lab.jpg',
  },
  {
    name: 'Osoblje',
    description: 'Iskusni i ljubazni doktori ce Vam se uvek naci u pomoci',
    image: '/images/osoblje.jpg',
  }
];

const Galery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slike.length);
    }, 3000); // Menja sliku na 3 sekunde

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography className="moving-title" variant="h2" component="h1" gutterBottom>
        Slike
      </Typography>
      <div className="galery-container">
        {slike.map((slika, index) => (
          <motion.div
            key={index}
            className={`galery-card ${index === currentImageIndex ? 'visible' : 'hidden'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <GaleryCard slika={slika} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Galery;

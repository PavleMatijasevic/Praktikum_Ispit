"use client";

import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Card, CardContent, CardActions, Button, SelectChangeEvent } from '@mui/material';

interface Service {
  name: string;
  price: number;
  description: string;
}

const serviceTypes: string[] = [
  'Laboratorijske',
  'Pregledi',
  'Intervencije',
  'Operacije'
];

const servicesData: { [key: string]: Service[] } = {
  laboratorijske: [
    { name: 'Krvna slika', price: 2000, description: 'Detaljna krvna slika.' },
    { name: 'Testiranje urina', price: 1000, description: 'Testiranje urina.' },
    { name: 'Hematoloske analize', price: 1500, description: 'Najčešća hematološka analiza koja se radi u laboratoriji je kompletna krvna slika..' },
    { name: 'Hormonske analize', price: 1800, description: 'Testiranje zeljenih nivoa hormona' }
  ],
  pregledi: [
    { name: 'Kardiološki pregled', price: 5000, description: 'Detaljan kardiološki pregled.' },
    { name: 'Dermatološki pregled', price: 3000, description: 'Pregled kože i dermatoloških problema.' },
    { name: 'Ortopedski pregled', price: 4000, description: 'Ortopedski pregledi u našoj klinici obuhvataju pregled i dijagnostiku bolnih stanja, povreda, iščašenja i preloma.' },
    { name: 'ORL pregled', price: 2500, description: 'Osnovni otorinolaringološki pregled uključuje pregled uha, grla, nosa i vrata.' }
  ],
  intervencije: [
    { name: 'Vađenje krvi', price: 1500, description: 'Vađenje krvi za analizu.' },
    { name: 'Biopsija', price: 10000, description: 'Biopsija tkiva.' },
    { name: 'Gastroskopija', price: 2500, description: 'Savremeni pregled jednjaka želuca i dvanaestopalačnog creva.' },
    { name: 'Ultrazvucna dijagnostika', price: 3500, description: 'Pregledom se prikazuju organi abdomena: jetra, žučna kesa, žučni kanali, pankreas i slezina.' }
  ],
  operacije: [
    { name: 'Operacija slepog creva', price: 50000, description: 'Hirurško uklanjanje slepog creva.' },
    { name: 'Hirurško uklanjanje ciste', price: 30000, description: 'Uklanjanje ciste hirurškim putem.' },
    { name: 'Laparoskopska hirurgija', price: 40000, description: 'Laparoskopske operacije su vrsta minimalno invazivne hirurgije koja se izvodi kroz nekoliko manjih otvora na trbuhu.' },
    { name: 'Hirurgija kile', price: 35000, description: 'U našoj klinici uspešno se izvodi operacija kile (hirurgija kile).' }
  ]
};

const ServicesPage: React.FC = () => {
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  const handleServiceTypeChange = (event: SelectChangeEvent<string>) => {
    const serviceType = event.target.value as string;
    setSelectedServiceType(serviceType);
    filterServices(serviceType);
  };

  const filterServices = (serviceType: string) => {
    const filtered = servicesData[serviceType.toLowerCase()];
    setFilteredServices(filtered);
  };

  return (
    <Container>
      <Typography className="moving-title" variant="h2" component="h1" gutterBottom>
        Usluge
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="service-type-label">Tip Usluge</InputLabel>
        <Select
          labelId="service-type-label"
          value={selectedServiceType}
          onChange={handleServiceTypeChange}
        >
          {serviceTypes.map((type, index) => (
            <MenuItem key={index} value={type.toLowerCase()}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="services-list">
        {filteredServices.map((service, index) => (
          <Card key={index} style={{ margin: '20px 0' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {service.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
              <Typography variant="body1" component="p">
                Cena: {service.price} RSD
              </Typography>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ServicesPage;

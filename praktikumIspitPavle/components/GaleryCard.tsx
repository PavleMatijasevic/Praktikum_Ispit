import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const GalleryCard = ({ slika }:any) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={slika.image}
        alt={`Image of ${slika.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {slika.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {slika.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;

"use client"
import React, { useState } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { newsData } from './newsData'; // Pretpostavljam da je newsData u istom direktorijumu

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sve');

  const categories = ['Sve', ...newsData.map((news) => news.category)];

  const filteredNews = selectedCategory === 'Sve'
    ? newsData.flatMap((news) => news.items)
    : newsData
        .filter((news) => news.category === selectedCategory)
        .flatMap((news) => news.items);

  return (
    <Container>
      <Typography className="moving-title" variant="h2" component="h1" gutterBottom>
        Vesti
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-label">Kategorija</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="news-list">
        {filteredNews.map((item, index) => (
          <Card key={index} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="body1" component="p">
                {item}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default NewsPage;

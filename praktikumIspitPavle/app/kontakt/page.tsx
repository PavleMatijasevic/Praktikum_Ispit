'use client';
import React, { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';
import { Button } from '@/components/ui/button';

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Question submitted:', { name, email, question });
    setSubmitted(true);
    setName('');
    setEmail('');
    setQuestion('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '32px' }}>
      <Typography variant="h3" className="moving-title" gutterBottom>
        Kontakt
      </Typography>
      <Typography variant="body1">Lokacija: Danijelova 32, Beograd</Typography>
      <Typography variant="body1">Telefon: +381 12 345 678</Typography>
      <Typography variant="body1">Email: pavleclinic@gmail.com</Typography>

      <Typography variant="h4" gutterBottom style={{ marginTop: '32px' }}>
        Postavite pitanje
      </Typography>
      {submitted ? (
        <Typography variant="body1" style={{ color: 'green' }}>
          Hvala vam na pitanju! Odgovorićemo vam u najkraćem mogućem roku.
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Ime"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Pitanje"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <Button type='submit' variant="default" color="primary">

            Pošalji
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ContactPage;

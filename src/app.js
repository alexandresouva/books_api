'use strict';

import express from 'express';

const app = express();

const books = [
  { id: 1, titulo: 'Senhor dos Anéis' },
  { id: 2, titulo: 'O Hobbit' },
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node. É muito bom...');
});

app.get('/livros', (req, res) => {
  res.status(200).json(books);
});

export default app;

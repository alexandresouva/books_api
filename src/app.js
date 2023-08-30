'use strict';

import express from 'express';

const app = express();

// Configuração para lidar com o corpo das requisições em formato JSON
app.use(express.json());

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

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso.');
});

app.put('/livros/:id', (req, res) => {
  const index = searchBook(req.params.id);
  books[index].titulo = req.body.titulo;
  res.status(200).json(books);
});

app.get('/livros/:id', (req, res) => {
  const index = searchBook(req.params.id);
  res.status(200).json(books[index]);
});

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const index = searchBook(id);
  books.splice(index, 1);
  res.status(200).send(`Livro ${id} apagado com sucesso.`);
});

function searchBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;

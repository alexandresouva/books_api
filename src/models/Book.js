'use strict';

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
});

// nome da tabela no DB
const books = mongoose.model('livros', bookSchema);

export default books;

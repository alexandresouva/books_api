'use strict';

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: {
    // Indica que Autor é uma referência a outro Schema
    type: mongoose.Schema.Types.ObjectId,
    ref: 'autores',
    required: true,
  },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
});

// nome da tabela no DB
const books = mongoose.model('livros', bookSchema);

export default books;

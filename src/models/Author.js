'use strict';

import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

// nome da tabela no DB
const authors = mongoose.model('autores', authorSchema);

export default authors;

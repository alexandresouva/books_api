'use strict';

import books from '../models/Book.js';

// Controller é responsável por conter os métodos chamados nas requisições
class BookController {
  static listBooks = async (req, res) => {
    try {
      // Busca em Livros e popula com dados do Autor.
      const booksFound = await books.find().populate('autor');
      res.status(200).json(booksFound);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listBookById = async (req, res) => {
    try {
      const id = req.params.id;
      // Em populate identifico a tabela e também os campos que devem ser trazidos.
      const bookFound = await books.findById(id).populate('autor', 'nome');
      res.status(200).json(bookFound);
    } catch (err) {
      res.status(400).send({
        message: `ID não localizado - ${err.message}`,
      });
    }
  };

  static createBook = async (req, res) => {
    try {
      const book = new books(req.body);
      await book.save();
      res.status(201).send(book.toJSON());
    } catch (err) {
      res.status(500).send({ message: `Falha ao cadastrar - ${err.message}` });
    }
  };

  static updateBook = async (req, res) => {
    try {
      const id = req.params.id;
      await books.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Livro atualizado com sucesso' });
    } catch (err) {
      res.status(500).send({
        message: `Falha ao atualizar, ID não localizado - ${err.message} `,
      });
    }
  };

  static deleteBook = async (req, res) => {
    try {
      const id = req.params.id;
      await books.findByIdAndDelete(id);
      res.status(200).send({ message: 'Livro removido com sucesso' });
    } catch (err) {
      res.status(500).send({
        message: `Falha ao excluir, ID não localizado. - ${err.message} `,
      });
    }
  };
}

export default BookController;

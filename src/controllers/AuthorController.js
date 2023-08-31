'use strict';

import authors from '../models/Author.js';

// Controller é responsável por conter os métodos chamados nas requisições
class AuthorController {
  static listAuthors = async (req, res) => {
    try {
      const authorsFound = await authors.find();
      res.status(200).json(authorsFound);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listAuthorById = async (req, res) => {
    try {
      const id = req.params.id;
      const authorFound = await authors.findById(id);
      res.status(200).json(authorFound);
    } catch (err) {
      res.status(400).send({
        message: `ID não localizado - ${err.message}`,
      });
    }
  };

  static createAuthor = async (req, res) => {
    try {
      const author = new authors(req.body);
      await author.save();
      res.status(201).send(author.toJSON());
    } catch (err) {
      res.status(500).send({ message: `Falha ao cadastrar - ${err.message}` });
    }
  };

  static updateAuthor = async (req, res) => {
    try {
      const id = req.params.id;
      await authors.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Autor atualizado com sucesso' });
    } catch (err) {
      res.status(500).send({
        message: `Falha ao atualizar, ID não localizado - ${err.message} `,
      });
    }
  };

  static deleteAuthor = async (req, res) => {
    try {
      const id = req.params.id;
      await authors.findByIdAndDelete(id);
      res.status(200).send({ message: 'Autor removido com sucesso' });
    } catch (err) {
      res.status(500).send({
        message: `Falha ao excluir, ID não localizado. - ${err.message} `,
      });
    }
  };
}

export default AuthorController;

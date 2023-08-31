'use strict';

import express from 'express';
import books from './booksRoutes.js';
import authors from './AuthorRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de Node' });
  });

  app.use(express.json(), books, authors);
};

export default routes;

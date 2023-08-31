'use strict';

import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

// Gerencia as rotas das API's
const router = express.Router();

router.get('/autores', AuthorController.listAuthors);
router.get('/autores/:id', AuthorController.listAuthorById);
router.post('/autores', AuthorController.createAuthor);
router.put('/autores/:id', AuthorController.updateAuthor);
router.delete('/autores/:id', AuthorController.deleteAuthor);

export default router;

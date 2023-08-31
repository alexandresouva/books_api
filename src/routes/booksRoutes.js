'use strict';

import express from 'express';
import BookController from '../controllers/BookController.js';

// Gerencia as rotas das API's
const router = express.Router();

router.get('/livros', BookController.listBooks);
router.get('/livros/:id', BookController.listBookById);
router.post('/livros', BookController.createBook);
router.put('/livros/:id', BookController.updateBook);
router.delete('/livros/:id', BookController.deleteBook);

export default router;

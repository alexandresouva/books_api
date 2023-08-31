'use strict';

import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// Conexão com o banco
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão feita com sucesso.');
});

// Express para criação do servidor web
const app = express();
// Configuração para lidar com o corpo das requisições em formato JSON
app.use(express.json());
// Envia para Routes a instância do Express que gerencia as rotas
routes(app);

export default app;

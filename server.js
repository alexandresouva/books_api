'use strict';
import app from './src/app.js';

const port = process.env.PORT || 3000;

// Inicia o servidor e escuta a porta
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost://${port}`);
});

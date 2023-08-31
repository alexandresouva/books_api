'use strict';

import mongoose from 'mongoose';
import { strConnection } from './dbConfig.js';

// Configurações para conexão do MongoDB
mongoose.connect(strConnection);

const db = mongoose.connection;

export default db;

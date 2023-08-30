'use strict';

import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://admin:admin@alura.wisen3f.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;

export default db;

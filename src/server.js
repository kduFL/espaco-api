'use strict';

const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.status(200).send('API funcionando corretamente');
});

console.log('\nAPI rodando em http://localhost:3000/')

app.listen(3000);
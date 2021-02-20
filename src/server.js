"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const port = 3000

const app = express();

app.use(bodyParser.json())

app.get("/", (req, res) => res.send("API funcionando corretamente"));

let news = [
  {
    "title": 'kduzera',
    'content': 'reeeeeeeee'
  },
  {
    "title": 'Carlos',
    'content': 'opaaaa'
  }
]

app.get("/news", (req, res) => {
  res.json(news)
});

app.post('/news', (req,res) => {
  news.push(req.body)
  res.json({"status": "200 - Item adicionado com sucesso!"})
})

console.log("\nAPI rodando em http://localhost:3000/");

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
})

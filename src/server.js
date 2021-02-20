"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://espacoAdmin:Entm1844@clusterespaco1.2bj1f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let newsCollection = "";
let db = "";

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    db = client.db("News");
    newsCollection = db.collection("news");
  })
  .catch(console.error);

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("API funcionando corretamente"));

app.get("/news", (req, res) => {
  const news = db
    .collection("news")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      res.json(results)
    });
});

app.post("/news", (req, res) => {
  newsCollection
    .insertOne(req.body)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error(error));
});

console.log("\nAPI rodando em http://localhost:3000/");

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});

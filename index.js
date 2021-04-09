const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Client = require("./models/client");
const Imo = require("./models/imo");
var cors = require("cors");

// const Product = require('./models/product');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.get("/clients", async function (req, res) {
  const clients = await Client.find();
  return res.json({ message: "ok", status: 200, result: clients }).status(200);
});
// zid heja fi base add
app.post("/clients", async function (req, res) {
  const client = await Client.create(req.body);
  return res.json({ message: client, status: 200 }).status(200);
});
// delete yfassa5
// put edit
app.delete("/clients/:id", async function (req, res) {
  await Client.deleteOne({ _id: req.params.id });
  return res.json({ message: "ok", status: 200 }).status(200);
});
// recuperation de la base get affichage
app.get("/clients/:id", async function (req, res) {
  const client = await Client.findOne({ _id: req.params.id });
  return res.json({ message: "ok", status: 200, result: client }).status(200);
});

// login
app.post("/clients/login", async function (req, res) {
  const { email, password } = req.body;
  const userFromDB = await Client.findOne({ email, password });
  if (!userFromDB) {
    return res
      .status(200)
      .json({ error: "Vos identifiants ne semblent pas corrects." });
  }
  const token = jwt.sign({ id: userFromDB._id }, "jwt_secret", {
    expiresIn: "24h",
  });

  return res
    .json({ message: "ok", client: userFromDB, token, status: 200 })
    .status(200);
});

app.post("/imo", async function (req, res) {
  console.log("imo", req.body);
  const imo = await Imo.create(req.body);
  return res.json({ result: imo, status: 200 }).status(200);
});

app.get("/imo", async function (req, res) {
  const clients = await Imo.find();
  return res.json({ message: "ok", status: 200, result: clients }).status(200);
});

app.delete("/imo/:id", async function (req, res) {
  await Imo.deleteOne({ _id: req.params.id });
  return res
    .json({ message: "ok", result: req.params.id, status: 200 })
    .status(200);
});

app.post("/imo", async function (req, res) {
  const imo = await Imo.create(req.body);
  return res.json({ result: imo, status: 200 }).status(200);
});

app.listen(4000, () => {
  mongoose.connect(`mongodb://localhost:27017/imoDb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`🚀 application ready at 4000`);
});

const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const mongoose = require("mongoose")
const Client = require('./models/client');
var cors = require('cors')

// const Product = require('./models/product');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors())

app.get('/products', async  function (req, res) {
    const clients = await Client.find();
   return res.json({ message: 'ok', status:200, result: clients}).status(200)
})

app.get('/clients', async  function (req, res) {
    const clients = await Client.find();
   return res.json({ message: 'ok', status:200, result: clients}).status(200)
})
// zid heja fi base add
app.post('/clients', async function (req, res) {
    const client = await Client.create(req.body)
    return res.json({ message: client, status:200}).status(200)
 })
// delete yfassa5
// put edit 
 app.delete('/clients/:id', async  function (req, res) {
    await Client.deleteOne({ _id:  req.params.id });
    return res.json({ message: 'ok', status:200 }).status(200)
 })
// recuperation de la base get affichage
 app.get('/clients/:id', async function (req, res) {
    const client = await Client.findOne({ _id:  req.params.id });
   return res.json({ message: 'ok', status:200, result: client}).status(200)
})

    app.listen(4000, () =>{
        mongoose.connect(`mongodb://localhost:27017/imoDb`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`🚀 application ready at 4000`)});
  

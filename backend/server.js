
const express = require('express')
require('dotenv').config()
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const cors = require('cors')

const dbName = 'pswdmngr';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())
client.connect();

//get all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

//save all passwords 
app.post('/', async (req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.insertOne(password)
    res.send({"success": true})
})


//delete password
app.delete('/', async (req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.deleteOne(password)
    res.send({"success": true})
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
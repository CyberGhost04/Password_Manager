const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'pswdmngr-enc';
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(cors());
client.connect();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'base64');
const iv = Buffer.from(process.env.ENCRYPTION_IV, 'base64');

const generateRandomNumber = () => {
    const min = 1000; 
    const max = 9999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

// Function to encrypt password
function encryptPassword(password) {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

// Function to decrypt password
function decryptPassword(encrypted) {
    if (!encrypted || !encrypted.iv || !encrypted.encryptedData) {
        return null;
    }
    let iv = Buffer.from(encrypted.iv, 'hex');
    let encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Get all passwords
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const findResult = await collection.find({}).toArray();
        const decryptedResult = findResult.map(doc => ({
            ...doc,
            password: decryptPassword(doc.password)
        }));
        res.json(decryptedResult);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching data.' });
    }
});

// Save all passwords
app.post('/', async (req, res) => {
    try {
        let { site, username, password, id } = req.body;
        if (id === null || id === undefined) {
            id = generateRandomNumber();
        }        
        const encryptedPassword = encryptPassword(password);
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const insertResult = await collection.insertOne({ site, username, password: encryptedPassword, id });
        res.send({ "success": true });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while saving data.' });
    }
});

app.delete('/', async (req, res) => {
    try {
        const { site, username, id } = req.body; // Exclude password field
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const deleteResult = await collection.deleteOne({ id }); // Compare other fields
        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting data.' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


const express = require('express');
const mongoose = require('mongoose');
//require('dotenv').config(); easier and quicker
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', (req,res) => {
    res.json('')
})

app.listen(4000);
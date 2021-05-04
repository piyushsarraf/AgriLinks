const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')



const Post = require('./models/form');
const postRoute = require('./routes/post');


const app =  express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/reports', postRoute);

app.get('/', (req, res) => {
    res.send("HEllo world");
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    () => console.log('Connected to DB'),
);

app.listen(port, () => console.log(`Server Running on port ${port}`));
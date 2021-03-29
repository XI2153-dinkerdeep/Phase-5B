const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

// Middlewares
app.use(bodyParser.json());

// Import Route
const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);

// ROUTES
app.get('/',(req, res) => {
    res.send('We are on Home!');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Conncted to DB!'));

// Listening
app.listen(3000);
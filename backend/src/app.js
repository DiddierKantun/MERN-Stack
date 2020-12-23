const express = require('express');
const cors = require('cors');

// route list
const userRoute = require('./routes/user');

const app = express();

// settings
app.set('port',process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/user', userRoute);

module.exports = app;
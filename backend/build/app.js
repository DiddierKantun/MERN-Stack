"use strict";

var express = require('express');

var cors = require('cors'); // route list


var userRoute = require('./routes/user');

var app = express(); // settings

app.set('port', process.env.PORT || 4000); // middlewares

app.use(cors());
app.use(express.json()); // routes

app.use('/api/user', userRoute);
module.exports = app;
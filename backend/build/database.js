"use strict";

var mongoose = require('mongoose');

var URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/webstore';
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log('DB is connected');
});
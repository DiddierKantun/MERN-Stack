"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = model('User', userSchema);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser"); // Add this line
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('db connected');
}

app.use(cors());

// Add the body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());


main().catch(err => console.log(err));

const newSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const customer = mongoose.model('customer', newSchema);

module.exports = customer;


const newContact = new mongoose.Contact({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model('contact', newContact);

module.exports = contact;








const express = require('express');
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const cors = require('cors');
const router = require('./route/api')

Mongoose.connect("mongodb://localhost:27017/lawyer", { useNewUrlParser: true });
Mongoose.Promise = global.Promise;

const app = express();
app.use(cors()); // to solve allow cross-origin access problem.
app.use(bodyParser.json())
app.use('/api' , router)

app.listen('4000' , () => {
    console.log('app running');
}) 
const express = require('express');
const GraphQLHTTP = require('express-graphql');
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const schema = require('./schema/schema');

Mongoose.connect("mongodb://localhost:27017/lawyer", { useNewUrlParser: true });
Mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json())
app.use('/graphQL',GraphQLHTTP({
    schema,
    graphiql : true
}))

app.listen('4000' , () => {
    console.log('app running');
}) 
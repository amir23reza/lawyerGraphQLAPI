const express = require('express');
const GraphQLHTTP = require('express-graphql');

const app = express();
app.use('/graphQL',GraphQLHTTP({
    
}))

app.listen('4000' , () => {
    console.log('app running');
})
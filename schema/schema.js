const graphQL = require('graphql');

const {GraphQLObjectType , GraphQLString} = graphQL;
// a comment for github changing code checking
const USER = new GraphQLObjectType({
    name : 'user' , 
    fields : () => {
        id : GraphQLString  
    }
})
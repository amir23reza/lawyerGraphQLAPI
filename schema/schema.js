const graphQL = require('graphql');

const {GraphQLObjectType , GraphQLString} = graphQL;

const USER = new GraphQLObjectType({
    name : 'user' , 
    fields : () => {
        name : GraphQLString
    }
})
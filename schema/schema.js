//schema has three responsiblities : 
//  1- definie types
//  2- define relationships between types
//  3- defining root queries : user jump into the graph node using root queries.
const graphQL = require('graphql');
const _ = require('lodash');
const UserModel = require('../models/users');
const QuestionModel = require('../models/questions');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID, // a custom type for id to use both string and integer for it.
    GraphQLList// to get a list of an object type we need this
} = graphQL;

const USER = new GraphQLObjectType({
    name : 'User' , 
    fields : () => ({
        id : {type : GraphQLID} , 
        name : {type : GraphQLString} ,   
        email : {type : GraphQLString} ,
        questions : {
            type : new GraphQLList(QUESTION),
            resolve(parent , args){
                //return _.filter(questions , {user_id : parent.id})
                return QuestionModel.find({user_id : parent.id});
            }
        }   
    })
}) 

const QUESTION = new GraphQLObjectType({
    name : 'Question' , 
    fields : () => ({
        id : {type : GraphQLID} , 
        title : {type : GraphQLString} ,   
        body : {type : GraphQLString} , 
        user : {
            type : USER , 
            resolve(parent , args){
                console.log(parent)
                //return _.find(users , {id : parent.user_id})
                return UserModel.findById(parent.id);
            }
        }
    })
}) 

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType' , 
    fields : {
        user : {
            type : USER , 
            args : {id : {type : GraphQLID}},
            resolve(parent , args){
                // code to fetch db
                //return _.find(users , {id : args.id})
                UserModel.findById(args.id);
            }
        } ,
        users : {
            type : new GraphQLList(USER),
            resolve(parent , args){
                //return users
                return UserModel.find({})
            }
        } ,
        question: {
            type: QUESTION,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to fetch db
                //return _.find(questions, { id: args.id })
                QuestionModel.findById(args.id)
            }
        },
        questions : {
            type : new GraphQLList(QUESTION) , 
            resolve(parent , args){
                //return questions
                return QuestionModel.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({ // to add , delete , edit we use mutations
    name : 'Mutation',
    fields : {
        addUser : {
            type : USER , 
            args : {
                name : {type : GraphQLString},
                email : {type : GraphQLString}
            } , 
            resolve(parent , args){
                let {name , email} = args;
                let user = new UserModel({
                    name , email
                })
                return user.save()
            }
        } , 
        addQuestion : {
            type : QUESTION , 
            args : {
                title : {type : GraphQLString},
                body : {type : GraphQLString} , 
                user_id : {type : GraphQLString}
            } , 
            resolve(parent , args){
                let {title , body , user_id} = args;
                let question = new QuestionModel({
                    title , body , user_id
                })
                return question.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation : Mutation
}) 
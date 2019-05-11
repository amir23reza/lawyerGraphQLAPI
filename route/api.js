const express = require('express');
const Router = express.Router();
const JWT = require('jsonwebtoken');
const Passport = require('passport');
const passportConf = require('../passport');
const UserModel = require('../models/user');
const QuestionModel = require('../models/question');
const TweetModel = require('../models/tweet');
const LikeModel = require('../models/like');
const CommentModel = require('../models/comment');

// user
Router.get('/user/signIn',(req , res , next)=>{
    
})

Router.post('/user/signUp',(req , res , next)=>{
    /* for the sign up we have to do 3 things : 
        1- unique email and unique nationalKey - check
        2- hash the pass - 
        3- generate token - check
    */
    const {type , fullName , email , nationalCode , img , phoneNumber , password , aboutMe} = req.body;
    UserModel.findOne({email}).then((data)=>{
        if(data){
            res.status(403).json({error : 'Email Already Exists'})
        } else { 
            UserModel.findOne({nationalCode}).then((data)=>{
                if(data){
                    res.status(403).json({error : 'nationalCode already exists'})
                } else { 
                    const newUser = new UserModel({
                        type , fullName , email , nationalCode , img , phoneNumber , password , aboutMe
                    });
                    newUser.save();
                    const token = JWT.sign({
                        iss : 'lawyerSignUp',
                        sub : newUser.id,
                        iat : new Date().getTime() , 
                        exp : new Date().getDate() + 3 
                    },'lawyerOverFlowAuthentication');
                    res.json({ token });
                }
            })
        }
    });

})

Router.put('/user/edit',(req , res , next)=>{ 

})
//user
/**================================================================== */
//question
Router.get('/question/byTime',Passport.authenticate('jwt' , {session : false}),(req , res , next)=>{
    console.log('by time')
})

Router.get('/question/byLike',(req , res , next)=>{

})

Router.post('/question/add' , (req , res , next)=>{

})
Router.get('/question/getSingle',(req , res , next)=>{

})
//question
/**================================================================== */
//tweet
Router.get('/tweet/fetch' , (req , res , next)=>{

})

Router.post('/tweet/add' , (req , res , next)=>{

})
Router.get('/tweet/getSingle' , (req , res , next)=>{

})
//tweet
/**================================================================== */
//like
Router.post('/like/hit',(req , res , next)=>{

})

Router.delete('/like/unlike',(req , res , next)=>{

})
//like
/**================================================================== */
//comment
Router.post('comment/add',(req , res , next)=>{

})
//comment
module.exports = Router;
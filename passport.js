const Passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const UserModel = require('./models/user');

Passport.use(new JWTStrategy({
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : 'lawyerOverFlowAuthentication'
}, (payload , done)=>{
    console.log('here1')
    try {
        console.log('here2')
        UserModel.findById(payload.sub).then(data=>{
            console.log(data)
            if(!data){
                return done(null , false)
            }
            return done(null , data)
        })
    } catch (error) {
        done(error , false)
    }
}))
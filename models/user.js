const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    type : String , 
    fullName : {
        type : String , 
        trim : true,
        required : true
    } , 
    email : {
        type : String , 
        trim : true , 
        required : true , 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        lowercase : true , 
        //unique : true
    } , 
    nationalCode : {
        type : String,
        required : true , 
        trim : true
    },
    img : String,
    phoneNumber : {
        type : String,
    },
    password : {
        type : String,
        minlength : 5
    },
    aboutMe : {
        type : String , 
        maxlength : 180
    }

})

module.exports = mongoose.model('User',userSchema);
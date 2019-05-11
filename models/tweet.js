const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = new schema({
    userId : String,
    content : {
        type : String , 
        required : true , 
        maxlength : 250
    },
    createTime : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Tweet',tweetSchema);
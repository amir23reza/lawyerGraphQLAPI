const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = new schema({
    userId : String,
    comment : {
        type : String,
        required : true
    },
    type : String , 
    forId : String 
})

module.exports = mongoose.model('Comment',commentSchema);
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questionSchema = new schema({
    userId : String,
    title : {
        type : String , 
        required : true
    } , 
    content : {
        type : String , 
        required : true , 
    },
    createTime : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Question',questionSchema);
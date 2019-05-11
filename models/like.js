const mongoose = require('mongoose');
const schema = mongoose.Schema;

const likeSchema = new schema({
    userId : String,
    type : String , 
    forId : String 
})

module.exports = mongoose.model('Like',likeSchema);
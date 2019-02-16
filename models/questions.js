const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questionSchema = new schema({
    title : String , 
    body : String , 
    user_id : String
})

module.exports = mongoose.model('Question',questionSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String,
    email: {type: String},
    age: Number,
    isAdmin: {type: Boolean, default: false},


    
});
const User = mongoose.model('User', userSchema);
module.exports = User;
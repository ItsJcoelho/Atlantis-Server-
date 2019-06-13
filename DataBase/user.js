let mongoose = require('mongoose');
let db = mongoose.connection;
var bcrypt = require('bcrypt')
//USER SCHEMA

let userSchema = new mongoose.Schema({
    

    name: String,
    password: String,
    email: String,
    course: String,
    xp: Number,
    challenges: Array(),
    type: String,
    numberInscription: Number
    
})
/*userSchema.pre("save", function() {
    const salt = 10
    const hash = bcrypt.hash(this.password,salt)
    this.password = hash
    
    
})*/

let user = db.model('User', userSchema);


module.exports = user;
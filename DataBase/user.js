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
userSchema.pre("save", async function(next) {
    const salt = 10
    const hash = await bcrypt.hash(this.password,salt)
    console.log(hash)
    this.password = hash
    
    next()
})

let user = db.model('User', userSchema);


module.exports = user;
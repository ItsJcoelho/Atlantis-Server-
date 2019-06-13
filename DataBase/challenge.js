let mongoose = require('mongoose');
let db = mongoose.connection;
//CHALLENGE SCHEMA

let challengeSchema = new mongoose.Schema ({
    
    name:{
        type:String
    },
    xpQuantity:{
        type:Number
    },
    goal:{
        type:Number()
    },
    completed:{
        type:Boolean
    }
})

let challenge = db.model('Challenge', challengeSchema);


module.exports = challenge;
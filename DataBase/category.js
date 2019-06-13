let mongoose = require('mongoose');
let db = mongoose.connection;
//CATEGORY SCHEMA

let categorySchema = new mongoose.Schema ({
    
    name:{
        type:String
    }
})

let category = db.model('Category', categorySchema);


module.exports = category;
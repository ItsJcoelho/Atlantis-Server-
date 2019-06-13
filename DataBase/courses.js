let mongoose = require('mongoose');
let db = mongoose.connection;


let courseSchema = new mongoose.Schema ({
    name:{
        type:String
    }
})

let course = db.model('Course', courseSchema);


module.exports = course


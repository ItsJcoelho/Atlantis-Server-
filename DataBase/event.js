let mongoose = require('mongoose');
let db = mongoose.connection;
//EVENT SCHEMA

let eventSchema = new mongoose.Schema ({
    
  
    date: String,
    name: String,
    capacity: Number,
    category: String,
    course: String,
    poster: String,
    speaker: String,
    creatorId: String,
    participants: Array(),
    comments: Array()
})

let event = db.model('Event', eventSchema);


module.exports = event;
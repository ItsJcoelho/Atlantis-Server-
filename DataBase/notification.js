let mongoose = require('mongoose');
let db = mongoose.connection;
//NOTIFICATION SCHEMA


let notificationSchema = new mongoose.Schema ({
    
    name:{
        type:String
    },
    description: {
        type:String
    },
    usersId: {
        type: Array()
    }
    
    
})

let notification = db.model('Notification', notificationSchema);


module.exports = notification;
module.exports = (app) => {

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jcoelho:12345@atlantisdatabase-htpfp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("Mongoose a Trabalhar")

}
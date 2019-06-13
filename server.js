const http = require('http'); 
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
require("./routes")(app)
require("./config/connect")(app)



app.listen(process.env.PORT, process.env.IP)
console.log("Server em Execuçao")
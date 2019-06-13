// Tipo do Utilizador
var express = require("express")
var app = express()

app.route('/')
    .get(function(req,res){
        res.send('Get')
    })
    .post(function(req,res){
        res.send('Post')
    })
    .put(function(req,res){
        res.send('Put')
    })
    .delete(function(req,res){
        res.send('Delete')
    })
// Cursos 
var express = require("express")

let router = express.Router();
let eventController = require("../controllers/events.controller.js")


router.route('/events')
    .get(function(req,res){
        eventController.get(req,res)
    })
    .post(function(req,res){
        eventController.post(req,res)
    })
    
router.route('/events/:id')
    .delete(function(req,res){
        eventController.delete(req,res)
    })
    .get(function(req,res){
        eventController.getByID(req,res)
    })
    .put(function(req,res){
        eventController.edit(req,res)
    })
    
module.exports = router
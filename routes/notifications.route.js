// Cursos 
var express = require("express")

let router = express.Router();
let notificationController = require("../controllers/notifications.controller.js")


router.route('/course')
    .get(function(req,res){
        notificationController.get(req,res)
    })
    .post(function(req,res){
        notificationController.post(req,res)
    })
    
router.route('/course/:id')
    .delete(function(req,res){
        notificationController.delete(req,res)
    })
    .get(function(req,res){
        notificationController.getByID(req,res)
    })
    
module.exports = router
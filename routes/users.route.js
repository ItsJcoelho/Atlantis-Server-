// Cursos 
var express = require("express")

let router = express.Router();
let userController = require("../controllers/users.controller.js")


router.route('/users')
    .get(function(req,res){
        userController.get(req,res)
    })
    .post(function(req,res){
        userController.post(req,res)
    })
    
router.route('/users/:id')
    .delete(function(req,res){
        userController.delete(req,res)
    })
    .get(function(req,res){
        userController.getByID(req,res)
    })
    .put(function(req,res){
        userController.edit(req,res)
    })
router.route('/auth')
    .post(function(req,res){
        userController.login(req,res)
    })
module.exports = router
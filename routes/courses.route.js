// Cursos 
var express = require("express")

let router = express.Router();
let courseController = require("../controllers/courses.controller.js")


router.route('/course')
    .get(function(req,res){
        courseController.get(req,res)
    })
    .post(function(req,res){
        courseController.post(req,res)
    })
    
router.route('/course/:id')
    .delete(function(req,res){
        courseController.delete(req,res)
    })
    .get(function(req,res){
        courseController.getByID(req,res)
    })
    
module.exports = router
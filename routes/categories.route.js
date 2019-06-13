// Categorias 
var express = require("express")
var router = express.Router();

let categoriesController = require("../controllers/categories.controller.js")


router.route('/categories')
    .get(function(req,res){
        categoriesController.get(req,res)
    })
    .post(function(req,res){
        categoriesController.post(req,res)
    })
    
router.route('/categories/:id')    
    .delete(function(req,res){
        categoriesController.delete(req,res)
    })
    .get(function(req,res){
        categoriesController.getByID(req,res)
    })
    
module.exports = router
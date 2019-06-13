// Desafios
var express = require("express")
var router = express.Router();

let challengesController = require("../controllers/challenges.controller.js")

var Challenges = require("../DataBase/challenge.js")
router.route('/challenges')
    .get(function(req,res){
        challengesController.get(req,res)
    })
    .post(function(req,res){
        challengesController.post(req,res)
    })

router.route('/challenges/:id')
    .delete(function(req,res){
        challengesController.delete(req,res)
    })
    .get(function(req,res){
        challengesController.getByID(req,res)
    })
    
module.exports = router
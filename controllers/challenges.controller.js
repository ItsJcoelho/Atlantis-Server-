var Challenges = require("../DataBase/challenge.js")
function GetChallenges(req,res){
    Challenges.find({}, function (err, challlenges){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(challlenges)
            }
            
        })
}
function PostChallenge(req,res){
        var newChallenge = new Challenges(req.body);
        newChallenge.save(function(error, doc) {
            console.log("Adicionado Com Sucesso");
        if (error) {
            res.status(500).send("Erro de Base de Dados!!!")
            console.error(error);
        }
        else{
            res.send(doc)
        }
        });
}
function DeleteChallenge(req,res){
    Challenges.findByIdAndRemove({_id:req.params.id}).then(function(challenges){
            res.send(challenges)
    })
    console.log(req.params.id)
}
function GetChalengesById(req,res){
    Challenges.find({_id:req.params.id}, function (err, challenges){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(challenges)
            }
            
        })
}
module.exports = {
    get: GetChallenges,
    post: PostChallenge,
    delete: DeleteChallenge,
    getByID: GetChalengesById
}
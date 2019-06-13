var User = require("../DataBase/user.js")
var joi = require("joi")
var bcrypt = require('bcrypt')
function GetUsers(req,res){
    User.find({}, function (err, users){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(users)
            }
            
        })
}
function PostUser(req,res){
        var newUser = new User(req.body);
        newUser.save(function(error, doc) {
            console.log("Adicionado Com Sucesso");
            console.log(doc)
        if (error) {
            res.status(500).send("Erro de Base de Dados!!!")
            console.error(error);
        }
        else{
            res.json(doc)
        }
        });
}
function DeleteUser(req,res){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
            res.send(user)
    })
    console.log(req.params.id)
}
function GetUserById(req,res){
    User.find({_id:req.params.id}, function (err, users){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(users)
            }
            
        })
}
function EditUsersById(req,res){
    User.findByIdAndUpdate(req.params.id,req.body, function(err){
        if(err){
            res.send("Erro Encontrado")
        }
        else{
            res.send("Alterado com sucesso")
        }
    })
}
async function userLogin(req,res){
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    let user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
    console.log(req.body.password)
    console.log(user.password)
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    res.send(true)
}
function validate(req) {
    const schema = {
        email: joi.string().required().email(),
        password: joi.string().required()
    };
 
    return joi.validate(req, schema);
}
module.exports = {
    get: GetUsers,
    post: PostUser,
    delete: DeleteUser,
    getByID: GetUserById,
    edit: EditUsersById,
    login: userLogin
}
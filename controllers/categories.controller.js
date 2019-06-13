var Categories = require("../DataBase/category.js")
function GetCategories(req,res){
    Categories.find({}, function (err, categories){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(categories)
            }
            
        })
}
function PostCategory(req,res){
        var newCategory = new Categories(req.body);
        newCategory.save(function(error, doc) {
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
function DeleteCategory(req,res){
    Categories.findByIdAndRemove({_id:req.params.id}).then(function(categories){
            res.send(categories)
    })
    console.log(req.params.id)
}
function GetCategoriesById(req,res){
    Categories.find({_id:req.params.id}, function (err,categories){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(categories)
            }
            
        })
}
module.exports = {
    get: GetCategories,
    post: PostCategory,
    delete: DeleteCategory,
    getByID: GetCategoriesById
}
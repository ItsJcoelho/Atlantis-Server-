var Notifications = require("../DataBase/notification.js")
function GetNotifications(req,res){
    Notifications.find({}, function (err, notifications){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(notifications)
            }
            
        })
}
function PostNotification(req,res){
        var newNotification = new Notifications(req.body);
        newNotification.save(function(error, doc) {
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
function DeleteNotification(req,res){
    Notifications.findByIdAndRemove({_id:req.params.id}).then(function(notification){
            res.send(notification)
    })
    console.log(req.params.id)
}
function GetCoursesById(req,res){
    Notifications.find({_id:req.params.id}, function (err, notifications){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(notifications)
            }
            
        })
}
module.exports = {
    get: GetNotifications,
    post: PostNotification,
    delete: DeleteNotification
}
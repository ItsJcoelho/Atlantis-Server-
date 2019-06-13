var Event = require("../DataBase/event.js")
function GetEvents(req,res){
    Event.find({}, function (err, events){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(events)
            }
            
        })
}
function PostEvent(req,res){
        var newEvent = new Event(req.body);
        newEvent.save(function(error, doc) {
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
function DeleteEvent(req,res){
    Event.findByIdAndRemove({_id:req.params.id}).then(function(event){
            res.send(event)
    })
    console.log(req.params.id)
}
function GetEventsById(req,res){
    Event.find({_id:req.params.id}, function (err, events){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(events)
            }
            
        })
}function EditEventsById(req,res){
    Event.findByIdAndUpdate(req.params.id,req.body, function(err){
        if(err){
            res.send("Erro Encontrado")
        }
        else{
            res.send("Alterado com sucesso")
        }
    })
}
module.exports = {
    get: GetEvents,
    post: PostEvent,
    delete: DeleteEvent,
    getByID: GetEventsById,
    edit: EditEventsById
    
}
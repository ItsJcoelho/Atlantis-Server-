var Course = require("../DataBase/courses.js")
function GetCourses(req,res){
    Course.find({}, function (err, courses){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(courses)
            }
            
        })
}
function PostCourse(req,res){
        var newCourse = new Course(req.body);
        newCourse.save(function(error, doc) {
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
function DeleteCourse(req,res){
    Course.findByIdAndRemove({_id:req.params.id}).then(function(course){
            res.send(course)
    })
    console.log(req.params.id)
}
function GetCoursesById(req,res){
    Course.find({_id:req.params.id}, function (err, courses){
            if(err){
                res.send("Erro Encontrado")
            }
            else{
                res.json(courses)
            }
            
        })
}
module.exports = {
    get: GetCourses,
    post: PostCourse,
    delete: DeleteCourse,
    getByID: GetCoursesById
    
}
const Todo = require('../models/Todo')
const env = require('../DB')

exports.savetodo=function(req,res){
  const {todo}=req.body
     let todoText = new Todo({
todo
     }
       );
    //  // console.log(todo);
      todoText.save(function (err) {
         if (err) {
             return res.status(422).json({
             'error': 'Oops! Something went wrong'
          })
          }
          return res.status(200).json({'message':'saved'})
        })
     
}
exports.gettodo=function(req,res){
Todo.find({},function (err,todos) {
    if (err) {
      return res.status(422).json({
        'error': 'Oops! Something went wrong'
      })
    }
    return res.status(200).json(todos)
  }
)
}
exports.deltodo=function(req,res){
  Todo.findByIdAndRemove({_id:req.params.id},function(err,todos){

    if(err){
      res.json(err);
    }
    else{
      res.json('Successfully Removed');
    }
  })
}
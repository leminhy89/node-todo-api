var express = require('express');
var app = express();
var PORT = process.env.PORT || 9999;
var todos = [{
    id: 1,
    description: 'Meet Mom for lunch',
    completed: false
},
{
    id: 2,
    description: 'Go to Market',
    completed: false
},
{
    id: 3,
    description: 'Feed the cat',
    completed: false
}];


app.get('/', function(req,res){
   res.send('Todo API List');
});

//get todos list
app.get('/todos', function(req,res){
   res.json(todos);
});


//get todos by ID
app.get('/todos/:id', function(req,res){
    
    var todoId = parseInt(req.params.id,10); //parse string to int decimal
    var matchedTodo;
    
    todos.forEach(function(todo){
        if(todoId === todo.id) {
            matchedTodo = todo;
        }
    });
    
    if(matchedTodo) {
        res.json(matchedTodo);
    }else {
        res.status(404).send();
    }
    
    res.send('Asking for todo with ID of '+ req.params.id);
});

app.listen(PORT,function(){
   console.log('Express is running on PORT: '+PORT+ ' !'); 
});


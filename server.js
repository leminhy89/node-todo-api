var express = require('express');
var app = express();
var PORT = process.env.PORT || 9999;

app.get('/', function(req,res){
   
   res.send('Todo API List');
    
});

app.listen(PORT,function(){
   console.log('Express is running on PORT: '+PORT+ ' !'); 
});


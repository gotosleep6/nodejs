const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 4000;


app.use(morgan('dev'));



app.get('/',function(req,res){

    res.send("hello world!").status(200);


});

app.get('/test',function (req,res){

   res.send("fuck u");

});
app.listen(port,function(){

console.log(`Server listening on ${port}`)

});

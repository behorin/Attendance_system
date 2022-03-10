const express=require ('express');
const bodyparser=require ('body-parser');

const {mongoose}=require ('./db.js');
var buscontroller= require('./controllers/buscontroller.js');

var app=express();
app.use(bodyparser.json());
app.listen(3001,()=>console.log('Server started @ port 3001'));

app.use('/staff',buscontroller);
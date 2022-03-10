const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/staff',(err)=>{
    if(!err)
    console.log('Mongo connected');
    else
    console.log('Error mongo connection'+JSON.stringify(err,undefined,2));
});
module.exports=mongoose;
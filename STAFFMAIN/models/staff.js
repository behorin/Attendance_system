const mongoose=require('mongoose');

var staff=mongoose.model('staff',{
    staff_id:{type:String},
    staff_name:{type:String},
    status:{type:String},
    date:{type:String},
    time:{type:String}
});

module.exports={staff};

const express=require ('express');
const { isValidObjectId } = require('mongoose');
var router=express.Router();


var {staff, staff}=require('../models/staff');

router.get('/',(req,res)=>{
    staff.find((err,docs)=>{
        if(!err){res.send(docs);}
        else
        {console.log('Error in retrieving staff'+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{

    var today=new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

var ctoday = dd + '/' + mm + '/' + yyyy;
var timer=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var staffpost=new staff({
        staff_id:req.body.staff_id,
        staff_name:req.body.staff_name,
        status:req.body.status,
        date:ctoday,
        time:timer,
    });
    staffpost.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in staff post'+JSON.stringify(err,undefined,2));}
    });
});

/*router.put('/:id',(req,res)=>{
    if(!isValidObjectId.isValid(req.params.id))
    return res.status(400).send('No Records: ${req.params.id}');
    var buspost={
        busno:req.body.busno,
        vehicleno:req.body.vehicleno,
        status:req.body.status,
        date:req.body.date,
        time:req.body.time,
    };
    bus.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
            else{console.log('Error in bus update'+JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id',(req,res)=>{
    if(!isValidObjectId.isValid(req.params.id))
    return res.status(400).send('No Records: ${req.params.id}');

    bus.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
            else{console.log('Error in bus deletion'+JSON.stringify(err,undefined,2));}
    });

});*/
module.exports=router;
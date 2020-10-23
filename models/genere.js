const mongoose =require('mongoose');

const genereSchema=new mongoose.Schema({
    name:{type:String,required:true},
    status:{type:Boolean,required:true},
})

module.exports=mongoose.model('Genre',genereSchema)
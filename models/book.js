const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String, required:true},
    pageNumber:{type:Number},
    publisher:{type:String, required:true},
    publicationDate:{type:Date},
    // gnere:{type:mongoose.Schema.Types.ObjectId,ref:'Genre'},Un libro tiene solo un genero de uno a uno 
    gnere:[{type:mongoose.Schema.Types.ObjectId,ref:'Genre'}]// de un libo a muchos generos 

})

/**
 *  gnere:{type:mongoose.Schema.Types.ObjectId,ref:'Genre'}=>de uno a uno
 *  gnere:[{type:mongoose.Schema.Types.ObjectId,ref:'Genre'}]=>de uno a muchos =>[{ }]
 */
module.exports =mongoose.model('Book',bookSchema)

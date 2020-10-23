const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ //creacion de un nuevo objeto en mongo
    firstNameUser: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true,},
    role: {type: String,required: true},
    birthDate: {type: Date},
    ege: {type: Number}
    
})

module.exports= mongoose.model('User', userSchema)
const express = require('express'); //utilizando express en nuestro proyecto 
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} =require('./db'); 
const app =express(); // se conviente a la constante express en un objeto, por el cual vamos a poder trabajar 

app.use(cors())
app.use(bodyParser.json())

conectDB(); //conectamos base de datos 
require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)

app.listen(8080,()=>{
    console.log('El servidor se levando correctamente ')
})

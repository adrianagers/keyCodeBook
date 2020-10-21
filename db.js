const mongoose =require('mongoose');//paquete que permite la comunicacion con nuestra base de datos.
const conectDB = ()=>{
    // metodo en mongoose=> permite conectarme a una base de datos ,  tiene unas opciones que son :
    // useNewUrlParser :Analiza la informacion que se quiere enviar a mongoBD
    // useUnifiedTopology: escuchar los llamados de hacemos a mongoDB y monitorea que es lo que pasa
    mongoose.connect('mongodb+srv://Geraldine:geraldinekeyCodeBook@geraldine.ujhr2.mongodb.net/KeyCodeBook?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
            if(error){
                console.log('Error',error)
            }else{
                console.log('Nos conectamos a la Base de datos.')
            }
        })//primer parametro una url:string(que va a tener la base de datos)and callback(funcion dentro de otra funcion )
}
// permite exportar una funcion para que pueda ser utilizada en otra parte de nuestro proyecto 

module.exports={conectDB}
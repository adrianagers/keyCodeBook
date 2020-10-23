const GenereModel = require('../models/genere');

exports.create = (req,res) =>{

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const genre = new GenereModel({
        name: req.body.name,
        status: req.body.status
    })
    genre.save()
    .then(
        (dataGenre)=>{
       res.send(dataGenre)
        }
    ).catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}
exports.update = (req, res) => {
    /**
     * validamos que todos los campos estan llenos 
     */
    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const genre = {
        name: req.body.name,
        status: req.body.status
    }
    /**
     * findByIdAndUpdate=Metodo protpio de MONGOOSE que permite buscar por id y actualizar el usuario 
     * 
     */
    GenereModel.findByIdAndUpdate(req.params.id, genre,{new:true})
        .then(
            (bookUpdate) => {
                res.send(bookUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
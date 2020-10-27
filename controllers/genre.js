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
/**
 * obtener todos los libros que tenemos
 * @param {*} req 
 * @param {*} res 
 */
exports.getAll = (req, res) => {
    GenereModel.find()
        .then((genres) => {
            res.send(genres)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}/**
 * metodo para traer solo uno 
 * @param {*} req 
 * @param {*} res 
 */
exports.getOne = (req, res) => {
    // console.log('aqui ta')
    GenereModel.findById(req.params.id)
       
        .then((genre) => {
            res.send(genre)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
/**
 * Metodo para eliminar el id
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteOne=(req,res)=>{ 
GenereModel.findByIdAndRemove(req.params.id)
.then((generedelete) => {
    res.send(generedelete)
})
.catch((error) => {
    res.status(500).send({
        message: error.message
    })
})
}
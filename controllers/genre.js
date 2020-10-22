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
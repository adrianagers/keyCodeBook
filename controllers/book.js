const BookModel = require('../models/book')

exports.create = (req,res) =>{

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        gnere: req.body.gnere,

    })
    book.save()
    .then(
        (dataBook)=>{
       res.send(dataBook)
        }
    ).catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}
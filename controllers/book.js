const BookModel = require('../models/book')

exports.create = (req, res) => {

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
        gnere: req.body.gnere

    })
    book.save()
        .then(
            (dataBook) => {
                res.send(dataBook)
            }
        ).catch(
            (error) => {
                return res.status(500).send({
                    message: error.message
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

    const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        gnere: req.body.gnere
    }
    /**
     * findByIdAndUpdate=Metodo protpio de MONGOOSE que permite buscar por id y actualizar el usuario 
     * 
     */
    BookModel.findByIdAndUpdate(req.params.id, book, {
            new: true
        })
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
    BookModel.find()
        .populate('gnere') //METODO EL CUAL NOS PERMITE TAER LOS DATOS DE LA COLLECCCION CON LA QUE SE TIENE LA RELACION 
        .exec()
        .then((books) => {
            res.send(books)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}
exports.getOne = (req, res) => {
    // console.log('aqui ta')
    BookModel.findById(req.params.id)
        .populate('gnere')
        .exec()
        .then((book) => {
            res.send(book)
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
BookModel.findByIdAndRemove(req.params.id)
.then((bookdelete) => {
    res.send(bookdelete)
})
.catch((error) => {
    res.status(500).send({
        message: error.message
    })
})
}
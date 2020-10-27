const UserModel = require('../models/user');
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {
    /**
     * El sisgno de admiracion (!) antede de la condicion  significa que estamos negando la condicion
     */

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        ege: req.body.ege

    })

    user.save().then((dataUser) => {
        res.send(dataUser)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
/**
 * Metodo para actualizar el usuario 
 * @param {*} req =>todo lo que enviamos desde el dody (formulario)
 * @param {*} res =>la respuesta que se devolvera
 */
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

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        ege: req.body.ege

    }
    /**
     * findByIdAndUpdate=Metodo protpio de MONGOOSE que permite buscar por id y actualizar el usuario 
     * 
     */
    UserModel.findByIdAndUpdate(req.params.id, user)
        .then(
            (userUpdate) => {
                res.send(userUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
exports.getAll = (req, res) => {
    UserModel.find()
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}
/**
 * metodo para traer solo uno 
 * @param {*} req 
 * @param {*} res 
 */
exports.getOne = (req, res) => {
    // console.log('aqui ta')
    UserModel.findById(req.params.id)
       
        .then((user) => {
            res.send(user)
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
UserModel.findByIdAndRemove(req.params.id)
.then((userdelete) => {
    res.send(userdelete)
})
.catch((error) => {
    res.status(500).send({
        message: error.message
    })
})
}
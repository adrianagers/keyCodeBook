module.exports = (app) =>{
    const book =require('../controllers/book')
    
    app.post('/book/create',book.create)
    // app.put('/genre/update/:id',user.update)
}
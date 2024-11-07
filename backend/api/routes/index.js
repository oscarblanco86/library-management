const express = require('express');

const booksRouter = require('./books.router.js')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    // router.use('',(req, res) => res.send("api v1"))
    router.use('/books',booksRouter)
}

module.exports = routerApi
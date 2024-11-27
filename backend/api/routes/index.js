const express = require('express');

const booksRouter = require('./books.router.js')
const authorRouter = require('./author.router.js');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/books',booksRouter);
    router.use('/author',authorRouter);
}

module.exports = routerApi
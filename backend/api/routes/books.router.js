const express = require('express');
const BookService = require('./../service/book.service');

const router = express.Router();
const service = new BookService();

router.get('/',
  async (req, res, next) => {
    try {
      const books = await service.find();
      res.json(books);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

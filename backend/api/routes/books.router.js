// const express = require('express');

// const router = express.Router();

// router.get('/',
//     ({res}) => res.send('books endpoint')
// )

// module.exports = router;

const express = require('express');
const BookService = require('./../service/book.service');
// const validatorHandler = require('../middlewares/validator.handler');
const { createBookSchema, updateBookSchema, getBookSchema } = require('./../schemas/books.schema');

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

// router.get('/:id',
//   validatorHandler(getBookSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const book = await service.findOne(id);
//       res.json(book);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post('/',
//   validatorHandler(createBookSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newBook = await service.create(body);
//       res.status(201).json(newBook);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.put('/:id',
//   validatorHandler(getBookSchema, 'params'),
//   validatorHandler(updateBookSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const book = await service.update(id, body);
//       res.json(book);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   validatorHandler(getBookSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(204).json();
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;

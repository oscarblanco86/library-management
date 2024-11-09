const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(100);
const publicationDate = Joi.date();
const authorId = Joi.number().integer();
const genreId = Joi.number().integer();
const ISBN = Joi.string().pattern(/^[0-9]{10,13}$/);
const availableCopies = Joi.number().integer().min(0);

const createBookSchema = Joi.object({
  title: title.required(),
  publicationDate: publicationDate,
  authorId: authorId.required(),
  genreId: genreId.required(),
  ISBN: ISBN.required(),
  availableCopies: availableCopies.required()
});

const updateBookSchema = Joi.object({
  title: title,
  publicationDate: publicationDate,
  authorId: authorId,
  genreId: genreId,
  ISBN: ISBN,
  availableCopies: availableCopies
});

const getBookSchema = Joi.object({
  id: id.required()
});

module.exports = { createBookSchema, updateBookSchema, getBookSchema };

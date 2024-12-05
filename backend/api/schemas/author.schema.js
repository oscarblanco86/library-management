const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const biography = Joi.string();
const dateOfBirth = Joi.date();
const nationality = Joi.string();

const createAuthorSchema = Joi.object({
    id: id,
    name: name,
    biography: biography,
    dateOfBirth: dateOfBirth,
    nationality: nationality
});

const updateAuthorSchema = Joi.object({
    id: id,
    name: name,
    biography: biography,
    dateOfBirth: dateOfBirth,
    nationality: nationality
});

const getAuthorSchema = Joi.object({
    id: id.required()
});

module.exports = { createAuthorSchema, updateAuthorSchema, getAuthorSchema };
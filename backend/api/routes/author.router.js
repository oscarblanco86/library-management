const express = require('express');

const AuthorService = require('../service/author.service');
const schema = require('./../schemas/author.schema');
const validatorHandler = require('../Middlewares/validator.handler');

const router = express.Router();
const service = new AuthorService();

router.get('/', async (req, res, next) => {
    const { limit, offset } = req.query;
    try {
        const authors = await service.find(parseInt(limit) || 10, parseInt(offset) || 0);
        res.json(authors);
    } catch (error) {
        next(error);
    }
});

router.get('/search', async (req, res, next) => {
    const { query } = req.query;
    try {
        const authors = await service.search(query);
        res.json(authors);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(schema.getAuthorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const author = await service.findOne(id);
            res.json(author);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(schema.createAuthorSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newAuthor = await service.create(body);
            res.status(201).json(newAuthor);
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    validatorHandler(schema.getAuthorSchema, 'params'),
    validatorHandler(schema.updateAuthorSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const author = await service.update(id, body);
            res.json(author);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(schema.getAuthorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({ id });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;

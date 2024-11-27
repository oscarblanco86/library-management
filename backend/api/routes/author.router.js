const express = require('express');
const { Author } = require('./../models/author.model');
const AuthorService = require('../service/author.service');

const router = express.Router();
const service = new AuthorService();

router.get('/',
    async (req, res, next) => {
        try {
            const author = await service.find();
            res.json(author);
        } catch (error) {
            next(error);
        }
    }
)

router.get('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const author = await service.findOne(id);
            res.json(author);
        } catch (error) {
            next(error);
        }
    }
)

router.post('/',
    async (req,res) => {
        const body = req.body;
        const newAuthor = await service.create(body);
        res.status(201).json({
            message: 'Created',
            ...newAuthor
        })
    }
)

router.delete('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({ id });
        } catch (error) {
            next(error);
        }
    }
)


module.exports = router;
const { models } = require('./../libs/sequelize');

class AuthorService {
    constructor() {
        this.authors = [];
    }

    async create(data) {
        const newAuthor = await models.Author.create(data);
        return newAuthor;
    }

    async find() {
        const authors = await models.Author.findAll();
        return authors;
      }
    async findOne(id) {
        const author = await models.Author.findByPk(id)
        return author;
    }
    async update(id, changes) {
        const author = await this.findOne(id);
        const updatedAuthor = await author.update(changes);
        return updatedAuthor;
    }
    async delete(id) {
        const author = await this.findOne(id);
        await author.destroy();
        return { id };
    }
}

module.exports = AuthorService;
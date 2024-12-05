const { Op } = require('sequelize');
const { models } = require('./../libs/sequelize');

class AuthorService {
    constructor() {
        this.authors = [];
    }

    async create(data) {
        const newAuthor = await models.Author.create(data);
        return newAuthor;
    }
    async findOne(id) {
        try {
          const author = await models.Author.findByPk(id);
          if (!author) {
            throw new Error('Author not found');
          }
          return author;
        } catch (error) {
          console.error(error);
          throw error;
        }
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
    async find(limit = 10, offset = 0) {
        const authors = await models.Author.findAll({
          limit,
          offset,
        });
        return authors;
    }
    async search(query) {
        const authors = await models.Author.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { nationality: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        return authors;
    }
}

module.exports = AuthorService;
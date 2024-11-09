const { models } = require('../libs/sequelize');

class BookService {
  async create(data) {
    const newBook = await models.Book.create(data);
    return newBook;
  }

  async find() {
    const books = await models.Book.findAll();
    return books;
  }

  async findOne(id) {
    const book = await models.Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  async update(id, changes) {
    const book = await this.findOne(id);
    const updatedBook = await book.update(changes);
    return updatedBook;
  }

  async delete(id) {
    const book = await this.findOne(id);
    await book.destroy();
    return { id };
  }
}

module.exports = BookService;

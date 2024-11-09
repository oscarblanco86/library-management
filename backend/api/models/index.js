const { BOOK_TABLE, BookSchema, Book } = require('./book.model');

function setupModels(sequelize) {
    Book.init(BookSchema, Book.config(sequelize));

    Book.associate(sequelize.models);
}

module.exports = setupModels;
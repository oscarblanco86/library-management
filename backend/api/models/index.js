const { Author, AuthorSchema } = require('./author.model');
const { Book, BookSchema } = require('./book.model');
const { Genre, GenreSchema } = require('./genre.model');
const { Member, MemberSchema } = require('./member.model');
const { Borrow, BorrowSchema } = require('./borrow.model');

function setupModels(sequelize) {
    Book.init(BookSchema, Book.config(sequelize));
    Author.init(AuthorSchema, Author.config(sequelize));
    Member.init(MemberSchema, Member.config(sequelize));
    Borrow.init(BorrowSchema, Borrow.config(sequelize));
    Genre.init(GenreSchema, Genre.config(sequelize));

    Book.associate(sequelize.models);
    Author.associate(sequelize.models);
    Member.associate(sequelize.models);
    Borrow.associate(sequelize.models);
    Genre.associate(sequelize.models);
}

module.exports = setupModels;
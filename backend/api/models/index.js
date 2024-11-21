const { Author, AuthorSchema } = require('./author.model');
const { Book, BookSchema } = require('./book.model');
const { Member, MemberSchema } = require('./member.model');
const { Borrow, BorrowSchema } = require('./member.model');

function setupModels(sequelize) {
    Book.init(BookSchema, Book.config(sequelize));
    Author.init(AuthorSchema, Author.config(sequelize));
    Member.init(MemberSchema, Member.config(sequelize));
    Borrow.init(BorrowSchema, Borrow.config);

    Book.associate(sequelize.models);
    Author.associate(sequelize.models);
    Member.associate(sequelize.models);
    Borrow.associate(sequelize.models);
}

module.exports = setupModels;
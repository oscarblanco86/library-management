const { Model, DataTypes, Squelize } = require('sequelize');
const { AUTHOR_TABLE } = require('./author.model');
const { GENRE_TABLE } = require('./genre.model');

const BOOK_TABLE = 'books';

const BookSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicationDate: {
        type: DataTypes.DATE,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refernces: {
            model: AUTHOR_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refernces: {
            model: GENRE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{10,13}$/,
        },
    },
    availableCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}


class Book extends Model {
    static associate(models) {
        Book.belongsTo(models.Author, { foreignKey: 'authorId' });
        Book.belongsTo(models.Genre, { foreignKey: 'genreId' });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOK_TABLE,
            modelName: 'Book',
            timeStamp: true
        }
    }
}

module.exports = { BOOK_TABLE, BookSchema, Book }

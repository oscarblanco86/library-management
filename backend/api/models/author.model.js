const { Model, DataTypes, Sequelize } = require('sequelize');

const AUTHOR_TABLE = 'authors';

const AuthorSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    biography: {
        allowNull: true,
        type: DataTypes.TEXT,
    },
    dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    nationality: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
}

class Author extends Model {
    static associate(models) {
        // Book.belongsTo(models.Author, { foreignKey: 'authorId' });
        // Book.belongsTo(models.Genre, { foreignKey: 'genreId' });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: AUTHOR_TABLE,
            modelName: 'Author',
            timeStamp: true
        }
    }
}


module.exports = { AUTHOR_TABLE, AuthorSchema, Author }
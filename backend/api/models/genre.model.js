const { Model, DataTypes, Sequelize } = require('sequelize');

const GENRE_TABLE = 'genres';

const GenreSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: { 
        allowNull: true, 
        type: DataTypes.TEXT, 
    }, 
    createdAt: { 
        allowNull: false, 
        type: DataTypes.DATE, 
    }, 
    updatedAt: { 
        allowNull: false, 
        type: DataTypes.DATE, 
    }
}

class Genre extends Model {
    static associate(models) {
        Genre.hasMany(models.Book, {foreignKey: 'genreId'})
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: GENRE_TABLE,
            modelName: 'Genre',
            timeStamp: true
        }
    }
}

module.exports = { GENRE_TABLE, GenreSchema, Genre }
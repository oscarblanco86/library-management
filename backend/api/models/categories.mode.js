const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
};

class Category extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false,
        };
    }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };

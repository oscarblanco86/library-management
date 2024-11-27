const { Model, DataTypes } = require('sequelize');
const { BOOK_TABLE } = require('./book.model');
const { MEMBER_TABLE } = require('./member.model');

const REVIEW_TABLE = 'reviews';

const ReviewSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: BOOK_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    memberId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: MEMBER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
    },
    comment: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
};

class Review extends Model {
    static associate(models) {
        Review.belongsTo(models.Book, { foreignKey: 'bookId' });
        Review.belongsTo(models.Member, { foreignKey: 'memberId' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: REVIEW_TABLE,
            modelName: 'Review',
            timestamps: true,
        };
    }
}

module.exports = { REVIEW_TABLE, ReviewSchema, Review };

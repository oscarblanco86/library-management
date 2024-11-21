const { Model, DataTypes, Sequelize } = require('sequelize');
const { BOOK_TABLE } = require('./book.model');
const { MEMBER_TABLE } = require('./member.model');

const BORROW_TABLE = 'borrowed'

const BorrowSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
            model: BOOK_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    memberId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
            model: MEMBER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    borrowDate: {
        allowNull: false,
        type: DataTypes.DATE
    },
    returnDate: {
        allowNull: false,
        type: DataTypes.DATE
    }
};

class Borrow extends Model {
    static associate(models) {
      
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: BORROW_TABLE,
            modelName: 'Borrow',
            timeStamp: false,
        }
    }
}

module.exports = { Borrow, BorrowSchema, BORROW_TABLE }
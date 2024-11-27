const { Model, DataTypes } = require('sequelize');
const { BOOK_TABLE } = require('./book.model');
const { MEMBER_TABLE } = require('./member.model');

const RESERVATION_TABLE = 'reservations';

const ReservationSchema = {
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
    reservationDate: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    status: {
        allowNull: false,
        type: DataTypes.ENUM('active', 'completed', 'cancelled'),
    },
};

class Reservation extends Model {
    static associate(models) {
        Reservation.belongsTo(models.Book, { foreignKey: 'bookId' });
        Reservation.belongsTo(models.Member, { foreignKey: 'memberId' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: RESERVATION_TABLE,
            modelName: 'Reservation',
            timestamps: false,
        };
    }
}

module.exports = { RESERVATION_TABLE, ReservationSchema, Reservation };

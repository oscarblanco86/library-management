const { Model, DataTypes, Sequelize } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const MEMBER_TABLE = 'members';

const MemberSchema = {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          }
        }
    },
    membershipDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
};

class Member extends Model {
    static associate(models) {
        
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: MEMBER_TABLE,
            modelName: 'Member',
            timestamps: true,
        }
    }
}

module.exports = { Member, MemberSchema, MEMBER_TABLE }
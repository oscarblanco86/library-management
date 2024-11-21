'use strict';

const { AUTHOR_TABLE } = require('./../api/models/author.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(AUTHOR_TABLE, 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    });
    await queryInterface.addColumn(AUTHOR_TABLE, 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(AUTHOR_TABLE, 'createdAt');
    await queryInterface.removeColumn(AUTHOR_TABLE, 'updatedAt');
  }
};

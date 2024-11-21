'use strict';

const { AUTHOR_TABLE } = require('./../api/models/author.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(AUTHOR_TABLE, 'newId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(AUTHOR_TABLE, 'newId');
  },
};

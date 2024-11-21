'use strict';

const { AUTHOR_TABLE, AuthorSchema } = require('./../api/models/author.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { id } = AuthorSchema;
    await queryInterface.changeColumn(AUTHOR_TABLE, 'id', id);
  },

  async down(queryInterface, Sequelize) {
    const { id } = AuthorSchema;
    await queryInterface.changeColumn(AUTHOR_TABLE, 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    });
  }
};

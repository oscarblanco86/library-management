'use strict';

const { AUTHOR_TABLE, AuthorSchema} = require('./../api/models/author.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AUTHOR_TABLE,AuthorSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(AUTHOR_TABLE,AuthorSchema);

  }
};

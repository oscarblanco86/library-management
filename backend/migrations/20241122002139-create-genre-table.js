'use strict';

const { GenreSchema, GENRE_TABLE } = require('../api/models/genre.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(GENRE_TABLE, GenreSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(GENRE_TABLE, GenreSchema);
  }
};

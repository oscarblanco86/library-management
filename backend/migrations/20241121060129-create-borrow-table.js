'use strict';

const { Borrow, BorrowSchema, BORROW_TABLE } = require('./../api/models/borrow.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(BORROW_TABLE, BorrowSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(BORROW_TABLE, BorrowSchema);
  }
};

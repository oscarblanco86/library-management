'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../api/models/categories.mode');
const { RESERVATION_TABLE, ReservationSchema } = require('../api/models/reservations.model');
const { REVIEW_TABLE, ReviewSchema } = require('../api/models/review.mode');
const { USER_TABLE, UserSchema } = require('../api/models/users.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(RESERVATION_TABLE, ReservationSchema);
    await queryInterface.createTable(REVIEW_TABLE, ReviewSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.dropTable(RESERVATION_TABLE, ReservationSchema);
    await queryInterface.dropTable(REVIEW_TABLE, ReviewSchema);
    await queryInterface.dropTable(USER_TABLE, UserSchema);
  }
};


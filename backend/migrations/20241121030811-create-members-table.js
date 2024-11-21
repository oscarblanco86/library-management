'use strict';

const { MEMBER_TABLE, MemberSchema } = require('../api/models/member.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MEMBER_TABLE,MemberSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MEMBER_TABLE)
  }
};

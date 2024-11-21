'use strict';

const { AUTHOR_TABLE, AuthorSchema } = require('./../api/models/author.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { id } = AuthorSchema;
    await queryInterface.addColumn(AUTHOR_TABLE, 'newId', id );
    await queryInterface.removeColumn(AUTHOR_TABLE, 'id');
    await queryInterface.renameColumn(AUTHOR_TABLE, 'newId', 'id');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(AUTHOR_TABLE, 'newId');
    // await queryInterface.addColumn(AUTHOR_TABLE, 'id', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // });
    // await queryInterface.renameColumn(AUTHOR_TABLE, 'id', 'newId');
  },
};

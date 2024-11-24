'use strict';

const { BOOK_TABLE } = require('./../api/models/book.model');
const { AUTHOR_TABLE } = require('./../api/models/author.model');
const { GENRE_TABLE } = require('./../api/models/genre.model');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable(BOOK_TABLE);

    if (!tableDescription.authorId) {
      await queryInterface.addColumn(BOOK_TABLE, 'authorId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: AUTHOR_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }

    if (!tableDescription.genreId) {
      await queryInterface.addColumn(BOOK_TABLE, 'genreId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: GENRE_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(BOOK_TABLE, 'authorId');
    await queryInterface.removeColumn(BOOK_TABLE, 'genreId');
  }
};

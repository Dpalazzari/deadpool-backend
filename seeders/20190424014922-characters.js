'use strict';
const seedHelper = require('../helpers/charactersSeedHelper');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let final = await seedHelper()
    return queryInterface.bulkInsert('characters', final, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('characters', null, {});
  }
};

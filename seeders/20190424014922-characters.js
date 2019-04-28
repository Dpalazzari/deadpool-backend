'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const request = require('request');
    const url     = require('../helpers/consulHelper');
    let offset    = 0;
    url().then(apiUrl => {
      
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('characters', null, {});
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      infinity_status: {
        type: Sequelize.STRING
      },
      endgame_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(()=> queryInterface.addConstraint('characters', ['infinity_status'], {
      type: 'check',
      where: {
        infinity_status: ['DEAD', 'ALIVE']
      }
    }))
    .then(() => queryInterface.addConstraint('characters', ['endgame_status'], {
        type: 'check',
        where: {
          endgame_status: ['DEAD', 'ALIVE']
        }
      }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('characters');
  }
};
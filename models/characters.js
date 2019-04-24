'use strict';
module.exports = (sequelize, DataTypes) => {
  const characters = sequelize.define('characters', {
    name: DataTypes.STRING,
    infinity_status: DataTypes.STRING,
    endgame_status: DataTypes.STRING
  }, {});
  characters.associate = function(models) {
    // associations can be defined here
  };
  return characters;
};
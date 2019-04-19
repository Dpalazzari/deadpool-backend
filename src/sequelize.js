const Sequelize = require('sequelize');
const debugDBConnectionStatus = require('debug')('deadpool-backend:connectionStatus');

const sequelize = new Sequelize('deadpool','','',{
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate().then(() => {
  console.log("Connecion has been established successfully.")
}).catch(err => {
  debugDBConnectionStatus("Unable to connect to database: " + err)
})

module.exports = {
  sequelize: sequelize,
  class: Sequelize
}
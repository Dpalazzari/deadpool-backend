module.exports = (app, db) => {
  const characterRouter = require('../routes/characterRoute')

  characterRouter(app, db)
}
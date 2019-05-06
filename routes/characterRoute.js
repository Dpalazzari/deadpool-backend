// console.log(typeof db.characters)
module.exports = (app, db) => {
  app.get("/api/v1/characters", (request, res) => {
    let characterModel = db.characters;
    characterModel.findAll().then(characters => {
      res.send(characters)
    })
  })
}
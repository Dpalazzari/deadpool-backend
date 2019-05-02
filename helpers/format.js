module.exports = (arr) => {
  return arr.map(element => {
    let obj = {}
    obj.name = element.name
    obj.description = element.description.substr(0, 254)
    obj.infinity_status = 'ALIVE'
    obj.endgame_status = 'ALIVE'
    obj.createdAt = new Date()
    obj.updatedAt = new Date()
    return obj
  })
}
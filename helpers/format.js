module.exports = (arr) => {
  return arr.map(element => {
    let obj = {}
    obj.name = element.name
    obj.description = element.description
    obj.infinity_status = 'ALIVE'
    obj.endgame_status = 'ALIVE'
    return obj
  })
}
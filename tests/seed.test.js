const seedHelper = require('../helpers/charactersSeedHelper');

test('pulls data from Marvel API to populate db', () => {
  seedHelper().then(final => {
    expect(final.length).toBe(1491)

    final.forEach(element => {
      let keys = Object.keys(element)
      expect(keys.length).toBe(6)
      expect(keys.includes('name')).toBe(true)
      expect(keys.includes('description')).toBe(true)
      expect(keys.includes('infinity_status')).toBe(true)
      expect(keys.includes('endgame_status')).toBe(true)
    })
  })
})
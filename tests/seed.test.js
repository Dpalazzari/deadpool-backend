const getData = require('../helpers/makeRequest');
const flatten = require('../helpers/flatten');
const format  = require('../helpers/format');
const url     = require('../helpers/consulHelper');

test('pulls data from Marvel API to populate db', async () => {
  let apiUrl = await url();
  let offSetArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
  const promises = offSetArray.map(async offSet => {
    offSetUrl = apiUrl + "&offset=" + offSet
    let apiData = await getData(offSetUrl)
    return apiData.data.results
  })
  
  const results = await Promise.all(promises)
  let flattenedData = flatten(results)
  // Marvel API has 1491 characters
  // if this fails it is likely because of
  // rate limiting from the Marvel API
  expect(flattenedData.length).toBe(1491)

  let final = format(flattenedData);

  expect(final.length).toBe(1491)
  final.forEach(element => {
    let keys = Object.keys(element)
    expect(keys.length).toBe(4)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('description')).toBe(true)
    expect(keys.includes('infinity_status')).toBe(true)
    expect(keys.includes('endgame_status')).toBe(true)
  })
})
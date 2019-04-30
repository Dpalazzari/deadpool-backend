const getData = require('../helpers/makeRequest');
const flatten = require('../helpers/flatten');
const format  = require('../helpers/format')

test('pulls data from Marvel API to populate db', async () => {
  const url = require('../helpers/consulHelper');
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
  expect(flattenedData.length).toBe(1491)

  // let final = format(flattenedData);
  // for (let i = 0; i < final.length; i++){
  //   let keys = Object.keys(final[i])
  //   expect(keys.length).toBe(4)
  //   expect(keys.includes('name')).toBe(true)
  // }
})
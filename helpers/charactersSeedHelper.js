const getData = require('../helpers/makeRequest');
const flatten = require('../helpers/flatten');
const format  = require('../helpers/format');
const url     = require('../helpers/consulHelper');

module.exports = async () => {
  let apiUrl = await url();
  let offSetArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
  const promises = offSetArray.map(async offSet => {
    offSetUrl = apiUrl + "&offset=" + offSet
    let apiData = await getData(offSetUrl)
    return apiData.data.results
  })

  const results = await Promise.all(promises)
  let flattenedData = flatten(results)
  let final = format(flattenedData);
  return final
}
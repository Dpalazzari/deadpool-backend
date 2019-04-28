test('pulls data from Marvel API to populate db', async () => {
  const url = require('../helpers/consulHelper');
  let apiUrl = await url();
  let offSetArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
  const characters = offSetArray.map(async (offSet) => {
    let options = {
      method: 'GET',
      uri: apiUrl,
      json: true,
      qs: {
        offset: offSet
      }
    }
    let getData = require('../helpers/mapApiData');
    let apiData = await getData(options)
    return apiData
  })
  debugger;
})
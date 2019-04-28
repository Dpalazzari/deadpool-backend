const getData = require('../helpers/mapApiData');
const url = require('../helpers/consulHelper');

test('pulls data from Marvel API to populate db', async () => {
  
  let apiUrl = await url();
  let offSetArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
  let characters = [];
  let iterateOffSets = async (offsets, next) => {
    for (let index = 0; index < offsets.length; index++) {
      await next(offsets[index]);
    }
  };

  iterateOffSets(offSetArray, async (offSet) => {
    let options = {
      method: 'GET',
      uri: apiUrl,
      json: true,
      qs: {
        offset: offSet
      }
    }
    let apiData = await getData(options);
    characters.push(apiData);
  });
});
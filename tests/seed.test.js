const async = require('async');

test('pulls data from Marvel API to populate db', async () => {
  const url = require('../helpers/consulHelper');
  let apiUrl = await url();
  let offSetArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

  let characters = [];
  let asyncAction = async (offSet, next) => {  
    let options = {
      method: 'GET',
      uri: apiUrl,
      json: true,
      qs: {
        offset: offSet
      }
    }
    let getData = require('../helpers/mapApiData');
    let apiData = await getData(options)  //doesn't getData return an array of objects?  So characters will end up being an array or arrays of objects rather than an array of objs?
    characters.push(apiData);  //add data to characters array
    next(); //callback to tick to the next item in the offSetArray
  };
  
  let onComplete =  err => {
    //this function fires after all iterations have been complete OR if there is an error
    err ? console.log(`error in async loop :: ${err}`) : console.log(`async looping completed`);
  };
  
  //  this async package will iterate the first arg, perform the second arg function on each item and then fire the last function after complete
  //  forEachSeries will hold each iteration until the previous is resolved
  async.forEachSeries(offSetArray, asyncAction, onComplete);

});
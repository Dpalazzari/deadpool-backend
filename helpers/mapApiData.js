module.exports = async (options) => {
  const getData = async (options) => {
    let makeRequest = require('../helpers/makeRequest');
    try {
      makeRequest(options).then(apiData => {
        return apiData
      })
    } catch (err) {
      console.log(err)
    }
  }
  return getData(options);
}
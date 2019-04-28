module.exports = async (options) => {
  const request = require('request-promise');
  const makeRequest = async (request, options) => {
    try {
      let response = await request(options);
      let results = response.data.results.map(element => {
        let obj = {};
        obj.name = element.name;
        obj.description = element.description;
        obj.infinity_status = 'ALIVE'
        obj.endgame_status  = 'ALIVE'
        return obj
      })
      return results
    } catch (err) {
      console.log(err);
    }
  }
  return await makeRequest(request, options);
}
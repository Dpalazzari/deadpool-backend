const request = require('request')

module.exports = async (url) => {
  const pullData = (url) => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error){
          reject(error)
        } else {
          resolve(JSON.parse(body))
        }
      })
    })
  }

  return pullData(url);
}
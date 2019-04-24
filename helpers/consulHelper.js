module.exports = async () => {  

  const getRequestUrl = async () => {
    let consul = require('consul')();
    let crypto = require('crypto');

    const publicKey = () => {
      return new Promise((resolve, reject) => {
        consul.kv.get('marvel/keys/public', (err, config) => {
          if (err) {
            reject(error);
          } else {
            resolve(JSON.parse(config.Value));
          }
        })
      })
    }

    const privateKey = () => {
      return new Promise((resolve, reject) => {
        consul.kv.get('marvel/keys/private', (err, config) => {
          if (err) {
            reject(error);
          } else {
            resolve(JSON.parse(config.Value));
          }
        })
      })
    }

    const apiHost = () => {
      return new Promise((resolve, reject) => {
        consul.kv.get('marvel/api/host', (err, config) => {
          if (err) {
            reject(error);
          } else {
            resolve(JSON.parse(config.Value));
          }
        })
      })
    }

    const timeStamp = () => {
      return new Date().getTime();
    }

    let pubKey  = await publicKey();
    let privKey = await privateKey();
    let url        = await apiHost();
    let ts = timeStamp();
    let hash = crypto.createHash('md5').update(ts + privKey + pubKey).digest('hex');
    url += "?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hash + "&limit=100"
    return url
  }

  return getRequestUrl();
}
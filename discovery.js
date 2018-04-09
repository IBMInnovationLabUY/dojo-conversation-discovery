function consultaDiscovery(query) {
  return new Promise(function(resolve, reject) {
    var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

    var discovery = new DiscoveryV1({
      username: process.env.DISCOVERY_USERNAME,
      password: process.env.DISCOVERY_PASSWORD,
      version_date: '2017-06-25'
    });

    var environment_id = process.env.ENVIRONMENT_ID;
    var collection_id = process.env.COLLECTION_ID;

    discovery.query({
      environment_id: environment_id,
      collection_id: collection_id,
      natural_language_query: query //Consulta a realizar
    }, function(error, data) {
        if (error) {
          reject(error);
        } else {
          console.log(JSON.stringify(data, null, 2));
          //resolve(JSON.stringify(data, null, 2));
        }
    });
  });
}

module.exports = consultaDiscovery;

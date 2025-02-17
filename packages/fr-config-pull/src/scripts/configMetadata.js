const { restGet } = require("../../../fr-config-common/src/restClient");

async function showConfigMetadata(tenantUrl, token) {
  try {
    const idmEndpoint = `${tenantUrl}/openidm/config/custom-config.metadata`;

    var response;

    try {
      response = await restGet(idmEndpoint, null, token);
    } catch (e) {
      if (e.response.status === 404) {
        console.error(`Warning: no config metadata available`);
        return;
      }
      console.error(
        `Bad response for config metadata: status ${e.response.status}`
      );
      return;
    }

    console.log(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.log(err);
  }
}

module.exports.showConfigMetadata = showConfigMetadata;

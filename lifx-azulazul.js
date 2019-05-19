const https = require('https');

function startAzulAzulEffect(config) {
  const options = {
    host: 'api.lifx.com',
    path: `/v1/lights/${config.lightId}/effects/pulse`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
    },
  };

  const body = {
    period: 1,
    cycles: 7,
    color: 'blue',
    from_color: 'white',
  };

  const request = https
    .request(options, (resp) => {
      resp.on('data', () => {});
      resp.on('end', () => console.log('done'));
    })
    .on('error', (e) => {
      console.log(e);
      console.log('error');
    });

  request.write(JSON.stringify(body));
  request.end();
}

exports.startAzulAzulEffect = startAzulAzulEffect;

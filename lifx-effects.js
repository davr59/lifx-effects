const https = require('https');

class LifxEffects {
  constructor(config) {
    this.config = config;
  }

  runCartaginesGoalEffect() {
    const body = {
      period: 1,
      cycles: 3,
      color: 'white',
      from_color: 'blue',
    };
    this._runPulse(this.config.lightId, this.config.lightAccessToken, body);
  }

  runCartaginesWinEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'white',
      from_color: 'blue',
    };
    this._runPulse(this.config.lightId, this.config.lightAccessToken, body);
  }

  runXboxOnEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    this._runPulse(this.config.lightId, this.config.lightAccessToken, body);
  }

  runXboxAchievementEffect() {
    const body = {
      period: 1,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    this._runPulse(this.config.lightId, this.config.lightAccessToken, body);
  }

  _runPulse(lightId, lightAccessToken, body) {
    const options = {
      host: 'api.lifx.com',
      path: `/v1/lights/${lightId}/effects/pulse`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${lightAccessToken}`,
      },
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
}

exports.LifxEffects = LifxEffects;

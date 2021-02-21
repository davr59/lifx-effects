const https = require('https');

class LifxEffects {
  constructor(config) {
    this.config = config;
  }

  runCartaginesGoalEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'white',
      from_color: 'blue',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runCartaginesWinEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'rgb:0,0,0',
      from_color: 'blue',
    };
    this._runPulse(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runXboxOnEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    this._runPulse(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runXboxAchievementEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runBitcoinNewHighEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'rgb:247,147,26',
      from_color: 'rgb:0,0,0',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runOff() {
    const body = {
      power_off: true,
    };
    this._run(this.config.lightGroupId, this.config.lightAccessToken, body, 'off');
  }

  _runPulse(lightGroupId, lightAccessToken, body) {
    this._run(lightGroupId, lightAccessToken, body, 'pulse');
  }

  _runBreathe(lightGroupId, lightAccessToken, body) {
    this._run(lightGroupId, lightAccessToken, body, 'breathe');
  }

  _run(lightGroupId, lightAccessToken, body, method) {
    const options = {
      host: 'api.lifx.com',
      path: `/v1/lights/group_id:${lightGroupId}/effects/${method}`,
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

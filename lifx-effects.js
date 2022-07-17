/* eslint-disable no-underscore-dangle */

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
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runCartaginesWinEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'rgb:0,0,0',
      from_color: 'blue',
    };
    LifxEffects._runPulse(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runXboxOnEffect() {
    const body = {
      period: 5,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    LifxEffects._runPulse(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runXboxAchievementEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'rgb:16,124,16',
      from_color: 'rgb:0,0,0',
    };
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runBitcoinNewHighEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'green',
      from_color: 'rgb:247,147,26',
    };
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runBitcoinNewLowEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'red',
      from_color: 'rgb:247,147,26',
    };
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runGalloTapadoEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'white',
      from_color: 'red',
    };
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runRandomColorEffect(inputColor) {
    // TODO
    // eslint-disable-next-line no-console
    console.log(`input color: "${inputColor || '-'}"`);
    const color = LifxEffects._buildColor(inputColor);
    // TODO
    // eslint-disable-next-line no-console
    console.log(`random color: "${color}"`);
    const body = {
      period: 2,
      cycles: 3,
      color: 'rgb:0,0,0',
      from_color: color,
    };
    LifxEffects._runBreathe(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
    );
  }

  runOff() {
    const body = {
      power_off: true,
    };
    LifxEffects._run(
      this.config.lightGroupId,
      this.config.lightAccessToken,
      body,
      'off',
    );
  }

  static _runPulse(lightGroupId, lightAccessToken, body) {
    LifxEffects._run(lightGroupId, lightAccessToken, body, 'pulse');
  }

  static _runBreathe(lightGroupId, lightAccessToken, body) {
    LifxEffects._run(lightGroupId, lightAccessToken, body, 'breathe');
  }

  static _buildColor(color) {
    const _color = color ? color.trim().toLowerCase() : '';
    switch (_color) {
      case 'white':
      case 'blanco':
        return 'white';
      case 'red':
      case 'rojo':
        return 'red';
      case 'orange':
      case 'naranja':
      case 'anaranjado':
        return 'orange';
      case 'yellow':
      case 'amarillo':
        return 'yellow';
      case 'cyan':
      case 'cian':
        return 'cyan';
      case 'green':
      case 'verde':
        return 'green';
      case 'blue':
      case 'azul':
        return 'blue';
      case 'purple':
      case 'morado':
      case 'púrpura':
      case 'purpura':
        return 'purple';
      case 'pink':
      case 'rosado':
      case 'rosa':
        return 'pink';
      case 'magenta':
      case 'fuchsia':
      case 'fucsia':
        return 'magenta';
      default:
        return LifxEffects._buildRandomColor();
    }
  }

  static _buildRandomColor() {
    const r = LifxEffects._random(0, 255);
    const g = LifxEffects._random(0, 255);
    const b = LifxEffects._random(0, 255);
    return `rgb:${r},${g},${b}`;
  }

  static _random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  static _run(lightGroupId, lightAccessToken, body, method) {
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
        // TODO
        // eslint-disable-next-line no-console
        resp.on('end', () => console.log('done'));
      })
      .on('error', (e) => {
        // TODO
        // eslint-disable-next-line no-console
        console.log(e);
        // TODO
        // eslint-disable-next-line no-console
        console.log('error');
      });

    request.write(JSON.stringify(body));
    request.end();
  }
}

exports.LifxEffects = LifxEffects;

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
      color: 'green',
      from_color: 'rgb:247,147,26',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runBitcoinNewLowEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'red',
      from_color: 'rgb:247,147,26',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runGalloTapadoEffect() {
    const body = {
      period: 2,
      cycles: 3,
      color: 'white',
      from_color: 'red',
    };
    this._runBreathe(this.config.lightGroupId, this.config.lightAccessToken, body);
  }

  runRandomColorEffect(inputColor) {
    console.log(`input color: "${inputColor || '-'}"`);
    const color = this._buildColor(inputColor);
    console.log(`random color: "${color}"`);
    const body = {
      period: 2,
      cycles: 3,
      color: 'rgb:0,0,0',
      from_color: color,
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

  _buildColor(color) {
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
        return this._buildRandomColor();
    }
  }

  _buildRandomColor() {
    const r = this._random(0, 255);
    const g = this._random(0, 255);
    const b = this._random(0, 255);
    return `rgb:${r},${g},${b}`;
  }

  _random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
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

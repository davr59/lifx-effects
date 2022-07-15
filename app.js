const { config } = require('./config');
const { LifxEffects } = require('./lifx-effects');

const lifxEffects = new LifxEffects(config);
const args = process.argv.slice(2);
switch (args[0]) {
  case 'bitcoin_new_high':
    lifxEffects.runBitcoinNewHighEffect();
    break;
  case 'bitcoin_new_low':
    lifxEffects.runBitcoinNewLowEffect();
    break;
  case 'cartagines_goal':
    lifxEffects.runCartaginesGoalEffect();
    break;
  case 'cartagines_win':
    lifxEffects.runCartaginesWinEffect();
    break;
  case 'gallotapado':
    lifxEffects.runGalloTapadoEffect();
    break;
  case 'xbox_on':
    lifxEffects.runXboxOnEffect();
    break;
  case 'xbox_achievement':
    lifxEffects.runXboxAchievementEffect();
    break;
  case 'random_color':
    lifxEffects.runRandomColorEffect(args[1]);
    break;
  default:
    break;
}

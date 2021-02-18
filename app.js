const { config } = require('./config');
const { LifxEffects } = require('./lifx-effects');

const lfixEffects = new LifxEffects(config);
const args = process.argv.slice(2);
switch (args[0]) {
  case 'cartagines_goal':
    lfixEffects.runCartaginesGoalEffect();
    break;
  case 'cartagines_win':
    lfixEffects.runCartaginesWinEffect();
    break;
  case 'xbox_on':
    lfixEffects.runXboxOnEffect();
    break;
  case 'xbox_achievement':
    lfixEffects.runXboxAchievementEffect();
    break;
  case 'bitcoin_high':
    lfixEffects.runBicoinHighEffect();
    break;
}

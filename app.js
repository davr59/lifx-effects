const { config } = require('./config');
const { LifxEffects } = require('./lifx-effects');

const lfixEffects = new LifxEffects(config);
const args = process.argv.slice(2);
switch (args[0]) {
  case 'cartaginesgoal':
    lfixEffects.runCartaginesGoalEffect();
    break;
  case 'cartagineswin':
    lfixEffects.runCartaginesWinEffect();
    break;
  case 'xboxon':
    lfixEffects.runXboxOnEffect();
    break;
  case 'xboxachievement':
    lfixEffects.runXboxAchievementEffect();
    break;
}

# lifx-effects

LIFX Effects | LIFX Efectos.

- https://www.youtube.com/watch?v=9vqBvDQhS4I

Node.js Function to power on a LIFX light with effects:

- Cartaginés Goal (blue/white breathe color transition)
- Cartaginés Win (blue/off pulse color transition)
- Xbox On (off/green pulse color transition)
- Xbox Achievement (off/green breathe color transition)
- Bitcoin New High (orange/green fast breathe color transition)
- Bitcoin New Low (orange/red fast breathe color transition)
- Lottery/Chances Draw, GalloTapado (red/white fast breathe color transition)
- Random Color (off/random color fast breathe color transition)

Función en Node.js para encender un bombillo LIFX light con efectos:

- Gol de Cartaginés (azul/blanco transición breathe de color)
- Triunfo de Cartaginés (azul/apagado transición pulse de color)
- Xbox Encendido (apagado/verde transición pulse de color)
- Logro en Xbox (apagado/verde transición breathe de color)
- Bitcoin Alto Nuevo (anaranjado/verde transición breathe de color)
- Bitcoin Bajo Nuevo (anaranjado/rojo transición breathe de color)
- Sorteo de Lotería/Chances, GalloTapado (rojo/blanco transición breathe de color)
- Color Aleatorio (apagado/color aleatorio transición breathe de color)

## References | Referencias

- [Breathe effect | Efecto breathe](https://api.developer.lifx.com/docs/breathe-effect)

- [Pulse effect | Efecto pulse](https://api.developer.lifx.com/docs/pulse-effect)

## Quickstart | Inicio rápido

Set your LIFX config in config.js:

Establecer su configuración de LIFX en config.js:

```javascript
const config = {
  lightGroupId: '',
  lightAccessToken: '',
};
```

Run:

Ejecutar:

```bash
npm run cartagines_goal
npm run cartagines_win
npm run xbox_on
npm run xbox_achievement
npm run bitcoin_new_high
npm run bitcoin_new_low
npm run gallotapado
npm run random_color
```

## Want to help? | ¿Quiere ayudar?

Want to file a bug, contribute some code, or improve documentation? Thanks! Feel free to contact me at [@davidvives](https://twitter.com/davidvives) or at davr59@outlook.com.

¿Quiere reportar un error o una pulga, contribuir con código o mejorar la documentación? ¡Muchas gracias! Puede contactarme a [@davidvives](https://twitter.com/davidvives) o a davr59@outlook.com.

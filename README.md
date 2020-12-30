# lifx-effects
LIFX Effects | LIFX Efectos.

Node.js Function to power on a LIFX light with effects:

* Cartaginés Goal (blue/white fast color transition)
* Cartaginés Win (blue/white slow color transition)
* Xbox On (black/green slow color transition)
* Xbox Achievement (black/green fast color transition)

Reference: https://api.developer.lifx.com/docs/pulse-effect

Función en Node.js  para encender un bombillo LIFX light con efectos:

* Gol de Cartaginés (azul/blanco transición rápida de color)
* Triunfo de Cartaginés (azul/blanco transición lenta de color)
* Xbox Encendido (negro/verde transición lenta de color)
* Logro en Xbox (negro/verde transición rápida de color)

Referencia: https://api.developer.lifx.com/docs/pulse-effect

## Quickstart | Inicio rápido

Set your LIFX config in config.js:

Establecer su configuración de LIFX en config.js:

```javascript
const config = {
  lightId: '',
  accessToken: '',
};
```

Run:

Ejecutar:

```bash
npm run cartagines_goal
npm run cartagines_win
npm run xbox_on
npm run xbox_achievement
```

## Want to help? | ¿Quiere ayudar?

Want to file a bug, contribute some code, or improve documentation? Thanks! Feel free to contact me at [@davidvives](https://twitter.com/davidvives) or at davr59@outlook.com.

¿Quiere reportar un error o una pulga, contribuir con código o mejorar la documentación? ¡Muchas gracias! Puede contactarme a [@davidvives](https://twitter.com/davidvives) o a davr59@outlook.com.

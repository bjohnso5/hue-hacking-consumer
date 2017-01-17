let Hue = require('hue-hacking-node').Hue;

let bridge = new Hue({
  ip: '192.168.11.33:8080',
  key: 'testapp'
});

bridge.turnOn(1).then(response => {
  // the lamp should now be on
  console.log(response.data);
}).catch(error => {
  // or something has gone horribly wrong
  console.error(error);
});
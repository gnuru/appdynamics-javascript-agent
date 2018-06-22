exports.loadAgentFromCDN = function(key, spa2=false) {
  window['adrum-start-time'] = new Date().getTime();
  (function(config){
      config.appKey = key;
      config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
      config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
      config.beaconUrlHttp = 'http://col.eum-appdynamics.com';
      config.beaconUrlHttps = 'https://col.eum-appdynamics.com';
      config.xd = {enable : false};
      config.spa = { "spa2": spa2 };
  })(window['adrum-config'] || (window['adrum-config'] = {}));
  var adRum = require('./adrum.js');
}

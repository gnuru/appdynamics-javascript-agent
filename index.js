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
};

/* 
 * Return string for local embedding of browser agent
 * eg:
 * const appDynamicsLoadJS = appdynamics.loadAgentClientStr('AD-AAB-AAJ-XVV', true);
 * {!isLocalDev && <script defer dangerouslySetInnerHTML={{ __html: appDynamicsLoadJS }} />}
 * */
exports.loadAgentClientStr = function(key, spa2=false) {
return `var key='`+key+`'; console.log('appdAgent loading');  window['adrum-start-time'] = new Date().getTime(); (function(config){ config.appKey = key; config.adrumExtUrlHttp = 'http://cdn.appdynamics.com'; config.adrumExtUrlHttps = 'https://cdn.appdynamics.com'; config.beaconUrlHttp = 'http://col.eum-appdynamics.com'; config.beaconUrlHttps = 'https://col.eum-appdynamics.com'; config.xd = {enable : false}; config.spa = { 'spa2': `+spa2+` }; })(window['adrum-config'] || (window['adrum-config'] = {})); `;
};

/*
 * Return url for main javascript code.
 * will extend to support locally hosted code (e.g. adrum.js)
 */
exports.mainJSUrl = function(useCDN=true) {
  return document.localhost.protocol + "//cdn.appdynamics.com/adrum/adrum-latest.js";
}

/*
 * Include using require, main body of Javascript from this package
 */
exports.loadMainJS = function() {
var adRum = require('./adrum.js');
}

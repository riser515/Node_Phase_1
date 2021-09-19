const os = require('os');
console.log("Total Memory", os.totalmem());
console.log("Architecture", os.arch());
console.log("Host", os.hostname());
console.log("Uptime (sec)", os.uptime());
console.log("Uptime (min)", os.uptime()/60);
console.log("Uptime (hr)", (os.uptime()/60)/60);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

exports.default = function (app) {
  var port = app.get('port');
  // create http server
  var server = (0, _http.createServer)(app);

  server.listen(port);

  server.on('error', function (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error('Port ' + port + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error('Port ' + port + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  server.on('listening', function () {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  });

  return server;
};
//# sourceMappingURL=createServer.js.map
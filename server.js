var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

app.listen(8080);
console.log('http://localhost:4567/');

// then just pass the server app handle to .listen()!

var dnode = require('dnode');
var server = dnode({
  zing : function (n, cb) { cb(n * 100) },
  run: function(plugin, args, callback){
    var cmd = require('./plugins/' + plugin + '.js');
    console.log(args);
    console.log(callback);
    cmd.run(args[0], args.slice(1), callback);
  }
});
server.listen(app);

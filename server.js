var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

app.listen(3456);
console.log('http://localhost:3456/');

// then just pass the server app handle to .listen()!

var dnode = require('dnode');
var server = dnode({
  zing : function (n, cb) { cb(n * 100) },
  run: function(plugin, args, callback){
    var cmd = require('./plugins/' + plugin + '.js');
    console.log(args);
    cmd.run(args[0],callback, args.slice(1));
  }
});
server.listen(app);

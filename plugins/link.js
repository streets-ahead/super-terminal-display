
var Plugin = {
  run: function(method, args, callback ) { this[method](args[0], callback); },
  add: function(link, callback){
    console.log("adding " + link);
	callback();
  }
}

module.exports = Plugin 


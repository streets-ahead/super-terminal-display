
var Plugin = {
  run: function(method, args ) { this[method](args[0]); },
  add: function(link){
    console.log("adding " + link);
  }
}

module.exports = Plugin 


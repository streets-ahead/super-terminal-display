var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Browser = require('zombie');

var Link = new Schema({
  link: String,
  title: String,
  sharer: String
});

var STDLink = mongoose.model('Link', Link);

var Plugin = {
  run: function(method, args, callback ) { this[method](args[0], callback); },
  add: function(link, callback){
    console.log("adding " + link);
    mongoose.connect("mongodb://localhost/std")
    var myLink = new STDLink();
    Browser.visit(link, function(e, browser){
      myLink.title = browser.text("title");
      myLink.link = link;
      myLink.sharer = 'terry';
      myLink.save(function(err){
        if(err){
          console.log(err);
        }else{
          callback("Added Link: " + myLink.title);
        }
      });
    });
  }
}

module.exports = Plugin 


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
  run: function(method, callback, args) { console.log("uuuuuu");this[method](callback, args[0]); },
  add: function(callback, link){
    mongoose.connect("mongodb://localhost/std")
    var myLink = new STDLink();
    Browser.visit(link, function(e, browser){
      myLink.title = browser.window.title;
      myLink.link = link;
      myLink.sharer = 'terry';
      myLink.save(function(err){
        if(err){
          console.log(err);
        }else{
          var savedLink = {
            link: link,
            title: browser.window.title
          }
          callback("linkAdded", {link: savedLink});
        }
      });
    });
  },
  show: function(callback){
          STDLink.find({}, function(err, docs){
            console.log(err);
            callback("showLinks", {links: docs});
          });
        }
}

module.exports = Plugin 


var results = {
  showLinks: function(args){
               for(var i in args){
                  var link = args[i]
                  var title = (link.title) ? link.title : link.link;
                  var aLink = "<a href='" + link.link + "'>" + title + "</a>"
                  println("\t " + aLink)
               }
             },
  linkAdded: function(args){
               println("Link: " + args.link.title);
               var myLink = args.link;
               var title = (myLink.title) ? myLink.title : myLink.link;

               println("Added Link: <a href='" + myLink.link + "'>" + title + "</a>" );
             }
}

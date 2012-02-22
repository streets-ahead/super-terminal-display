var results = {
  showLinks: function(args){
               var links = args.links
               for(var link in links){
                 println("\t<a href='" + link.link + "'>" + link.title + "</a>")
               }
             },
  linkAdded: function(args){
               println("Link: " + args.link.title);
               var myLink = args.link;
               var title = (myLink.title) ? myLink.title : myLink.link;

               println("Added Link: <a href='" + myLink.link + "'>" + title + "</a>" );
             }
}

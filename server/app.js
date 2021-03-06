/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app){
  var db = require("./assignment/model/models.server");
  require("./assignment/services/user.service.server.js")(app);
  require("./assignment/services/website.service.server.js")(app);
  require("./assignment/services/page.service.server.js")(app);
  require("./assignment/services/widget.service.server.js")(app)
}
;

// /Users/dujiaguo/neu/webdev/server/assignment/model/models.server.js

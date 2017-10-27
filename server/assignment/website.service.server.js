module.exports = function (app) {

  app.get('/api/website', findAllWebsites);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);




  var websites = [
    { '_id': '123', 'name': 'Facebook' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess' , 'developerId': '234', 'description': 'Lorem' },
  ];

  function findAllWebsites(req, res){
    res.json(websites);
  }


  function findWebsiteById(req,res){
    // var userId =  req.params["userId"];
    var websiteId = req.params["websiteId"];
    var website = websites.find(function (website) {
      return website._id === websiteId;
    });
    res.json(website)
  }

  function updateWebsite(req,res){
    var websiteId = req.params['websiteId'];
    var newWebsite = req.body;
    for (var i = 0; i < websites.length; i++){
      if (websites[i]._id === websiteId){
        websites[i] = newWebsite;
        break;
      }
    }
    res.json(websites);
  }


  function deleteWebsite(req,res){
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i, 1);
      }
    }
    res.json(websites);
  }


  function createWebsite(req,res){
     var userId = req.params["userId"];
      var website = req.body;
      website.developerId = userId;
      websites.push(website);
      res.json(website);
    }

  function findAllWebsitesForUser(req,res){
    var userId = req.params["userId"];
    var userWebsites = [];
    for (var i = 0; i < websites.length; i++){
      if (websites[i].developerId === userId){
        userWebsites.push(websites[i]);
      }
    }
    res.json(userWebsites);
  }



}

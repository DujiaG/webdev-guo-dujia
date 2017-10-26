module.exports = function (app) {

  app.get('/api/website', findAllWebsites);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);




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


  }
}

module.exports = function () {
  app.get("/api/page/:pageId", findPageById);
  app.get("/api/website/:websiteId/page", findPagesByWebsiteId);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);
  app.post("/api/website/:websiteId/page", createPage);

  pages = [
    { '_id': '321', 'name': 'Post 1' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3' , 'websiteId': '456', 'description': 'Lorem' }
  ];

  function findPageById(req,res){
    var pageId =  req.params["pageId"];
    var page = pages.find(function (page) {
      return page._id === pageId;
    });
    res.json(page);
  }


  function deletePage(req, res){
    var pageId = req.params['pageId'];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.splice(i, 1);
      }
    }
    res.json(pages);
  }


  function updatePage(req,res){
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for (var i = 0; i < pages.length; i++){
      if (pages[i]._id === pageId){
        pages[i] = newPage;
        break;
      }
    }
    res.json(pages);
  }

  function findPagesByWebsiteId(req,res){
    var websiteId = req.params["websiteId"];
    var pagesOfWebsite = [];
      for (var i = 0; i < pages.length; i++){
        if (pages[i].websiteId === websiteId){
          pagesOfWebsite.push(pages[i]);
        }
      }
      res.json(pagesOfWebsite);
  }

  function createPage(req,res){
    // var pageId = (new Date()).getTime().toString();
    // everything comes from the client goes into the body?
    var page = req.body;
    pages.push(page);
    res.json(page);
  }





}

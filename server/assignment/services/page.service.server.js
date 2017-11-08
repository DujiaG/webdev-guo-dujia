module.exports = function(app) {
  app.get("/api/page/:pageId", findPageById);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);
  app.post("/api/website/:websiteId/page", createPage);
  // app.get('/api/page', findPages);
  var PageModel = require("../model/page/page.model.server");

  var pages = [
    { _id: '321', name: 'Post 1' , websiteId: '456', description: 'Lorem' },
    { _id: '432', name: 'Post 2' , websiteId: '456', description: 'Lorem' },
    { _id: '543', name: 'Post 3' , websiteId: '456', description: 'Lorem' }
  ];


  function createPage(req,res){
    // var pageId = (new Date()).getTime().toString();
    // everything comes from the client goes into the body?
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page.website = websiteId;
    delete page._id;

    PageModel
      .createPage(page)
      .then(function (page) {
        res.json(page)},
      function (err) {
        console.log(err);
      });
  }


/*  function findPages(req, res){
    res.json(pages);
  }*/

  function findPageById(req,res){
    var pageId =  req.params["pageId"];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
    })
/*    var page = pages.find(function (page) {
      return page._id === pageId;
    });
    res.json(page);*/
  }


  function deletePage(req, res){
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId)
      .then(function (status) {
        res.json(status);
      })
/*    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.splice(i, 1);
      }
    }
    res.json(pages);*/
  }


  function updatePage(req,res){
    var pageId = req.params['pageId'];
    var newPage = req.body;
    PageModel.updatePage(pageId)
      .then(function (status) {
        res.send(status);
      });
  }

  function findAllPagesForWebsite(req,res){
    var websiteId = req.params["websiteId"];
    PageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (websites) {
        res.json(websites);
      })

/*      for (var i = 0; i < pages.length; i++){
        if (pages[i].websiteId === websiteId){
          pagesOfWebsite.push(pages[i]);
        }
      }
      res.json(pagesOfWebsite);
    console.log(pagesOfWebsite[0],'from server');*/
  }


}

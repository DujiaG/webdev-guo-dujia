var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var PageModel = mongoose.model("pageModel", pageSchema);
var WebsiteModel = require('../website/website.model.server');
PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;


function createPage(Page) {
  var newPage = null;
  return PageModel
    .create(Page)
    .then(function(Page){
      newPage = Page;
      return WebsiteModel
        .findWebsiteById(Page.website)
        .then(function(website){
          website.pages.push(newPage);
          // save and update this object back into the database
          return website.save();
        })
    })
}

/*function createPageForUser(userId, Page){
  Page.developerId = userId;
  PageModel.create(Page)
    .then(function (user){
      user.Pages.push(Page);
      return user.save();
    })
}*/

function findAllPagesForWebsite(websiteId) {
  return PageModel
    .find({website: websiteId})
    .populate('website')
    //execute all operations stacked with that collection
    .exec();
}
/*  return PageModel.find(function (err, docs) {
    console.log(docs);
  });*/


function findPageById(PageId){
  return PageModel.findById(PageId)
}


function deletePage(PageId){
  return PageModel.remove({_id: PageId});
}

function updatePage(PageId, Page){
  // update object at PageID
  return PageModel.update({_id: PageId}, Page);
}



module.exports = PageModel;

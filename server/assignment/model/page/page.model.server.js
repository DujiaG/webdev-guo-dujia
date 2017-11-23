var mongoose = require("mongoose");
var pageSchema = require('./page.schema.server');
var PageModel = mongoose.model("PageModel", pageSchema);
var WebsiteModel = require('../website/website.model.server');
PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;

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
        });
    },
    function(err){
      console.log(err);
    });
}

/*function createPageForUser(userId, Page){
  Page.developerId = userId;
  PageModel.create(Page)w
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


function findPageById(pageId){
  return PageModel.findById(pageId)
}


function deletePage(pageId){
  return PageModel.remove({_id: pageId});
}

function updatePage(pageId, page){
  // update object at PageID
  // return PageModel.update({_id: pageId}, {$set: {name: Page.name, description: Page.description}});
  return PageModel.update({_id: pageId}, page)
}




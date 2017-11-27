var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server");
// declare a local model that allowed  us to communicate with the database,
// used to create an instance of the data model
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
var userModel = require('../user/user.model.server');
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.deleteWebsite = deleteWebsite;
WebsiteModel.updateWebsite = updateWebsite;


function createWebsiteForUser(website) {
  var newWebsite = null;
  return WebsiteModel
    .create(website)
    .then(function(website){
      newWebsite = website;
      return userModel
        .findUserById(website.developerId)
        .then(function(user){
          user.websites.push(newWebsite);
          // save and update this object back into the database
          return user.save();
        })
    })
}

/*function createWebsiteForUser(userId, website){
  website.developerId = userId;
  WebsiteModel.create(website)
    .then(function (user){
      user.websites.push(website);
      return user.save();
    })
}*/

function findAllWebsitesForUser(userId) {
  return WebsiteModel
    .find({developerId: userId})
    .populate('developerId')
    //execute all operations stacked with that collection
    .exec();
}
/*  return WebsiteModel.find(function (err, docs) {
    console.log(docs);
  });*/


function findWebsiteById(websiteId){
  return WebsiteModel.findById(websiteId)
}


function deleteWebsite(websiteId){
  return WebsiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, website){
  // update object at WebsiteID
  return WebsiteModel.update({_id: websiteId}, website);
}



module.exports = WebsiteModel;

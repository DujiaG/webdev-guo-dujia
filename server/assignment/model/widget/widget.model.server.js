var mongoose = require("mongoose");
var WidgetSchema = require("./widget.schema.server.js");
// declare a local model that allowed  us to communicate with the database,
// used to create an instance of the data model
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);
var PageModel = require('../page/page.model.server');
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.createWidgetForPage = createWidgetForPage;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;


/*function createWidgetForPage(widget) {
  var newWidget = null;
  return WidgetModel
    .create(widget)
    .then(function(widget){
      newWidget = widget;
      return PageModel
        .findPageById(widget.page)
        .then(function(page){
          page.widgets.push(newWidget);
          // save and update this object back into the database
          return page.save();
        })
    })
}*/

function createWidgetForPage(widget) {
  return WidgetModel
    .create(widget)
}

/*function createWidgetForUser(userId, Widget){
  Widget.developerId = userId;
  WidgetModel.create(Widget)
    .then(function (user){
      user.Widgets.push(Widget);
      return user.save();
    })
}*/

function findAllWidgetsForPage(pageId) {
  return WidgetModel
    .find({page: pageId})
     .populate('page')
    //execute all operations stacked with that collection
    .exec();
}
/*  return WidgetModel.find(function (err, docs) {
    console.log(docs);
  });*/


function findWidgetById(widgetId){
  return WidgetModel.findById(widgetId)
}


function deleteWidget(widgetId){
  return WidgetModel.remove({_id: widgetId});
}

function updateWidget(widgetId, widget){
  // update object at WidgetID
  return WidgetModel.update({_id: widgetId}, widget);
}



module.exports = WidgetModel;

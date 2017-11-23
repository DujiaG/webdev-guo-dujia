module.exports = function (app) {

  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findWidgetsByPageId);
  var WidgetModel = require("../model/widget/widget.model.server");

/*
  var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];*/

  function createWidget(req, res) {
    var pageId = req.params["pageId"];
    var widget = req.body;
    //console.log(widget);
    widget.pageId = pageId;

    WidgetModel
      .createWidgetForPage(widget)
      .then(function (widget) {
          res.json(widget)
        },
        function (err) {
          console.log(err);
        })
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget)
      })
    /*    var widget = widgets.find(function (widget) {
          return widget._id === widgetId;
        });
        res.json(widget);*/
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    WidgetModel
      .updateWidget(widgetId, newWidget)
      .then(function (status) {
        res.send(status);
      });
  }


  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    WidgetModel
      .deleteWidget(widgetId)
      .then(function (status) {
        res.send(status);
      });
  }


  function findWidgetsByPageId(req, res) {
    var pageId = req.params["pageId"];
    console.log(pageId);
    WidgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      },
        function (err) {
        console.log(err);
        });
  }


}


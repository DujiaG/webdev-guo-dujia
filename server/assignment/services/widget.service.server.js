module.exports = function (app) {
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../../src/assets/uploads' });
  var fs = require('fs');

  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findWidgetsByPageId);
  app.post('/api/upload', upload.single('myFile'), uploadImage);
  // app.get('/api/upload', getFileUploads);
  app.put('/api/page/:pageId/widget', widgetSortable);
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

  function widgetSortable(req, res){
    "use strict";

  }

  function uploadImage(req, res){
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        widget.url = 'assets/uploads/'+filename;

        WidgetModel
          .updateWidget(widgetId, widget)
          .then(function (stats) {
              console.log(stats);
              res.send(stats);
            },
            function (err) {
              "use strict";
              res.sendStatus(404).send(err);
            });
        var callbackUrl   =  'http://localhost:4200/user/' + userId + '/website/' + websiteId + '/page/' + pageId +
          '/widget/' + widgetId;

        res.redirect(callbackUrl);
      })
  }

/*  function getFileUploads(req, res){
    fs.readdir(__dirname+'/../../public/uploads',
      function(err, files){
      res.send(files);
      });
  }*/

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


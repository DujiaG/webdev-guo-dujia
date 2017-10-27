module.exports = function () {
  app.get("/api/page/:pageId", findPageById);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);
  app.post("/api/website/:websiteId/page", createPage);

  pages = [
    { '_id': '321', 'name': 'Post 1' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3' , 'websiteId': '456', 'description': 'Lorem' },
  ];

  


}

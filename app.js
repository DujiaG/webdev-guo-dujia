module.exports = function(app){
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user");

  var users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstname: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstname: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ]

  function findUserById(req,res){
    var userId = req.params["userId"];
    var user = users.find(function (user){
      return user._id === userId;
    });
  }

  function findUsers(req,res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var user = users.find(function (user){
        return user.username === username && user.password === password;
      });
      if (user){
        res.json(user);
      }
      else {
        res.json ({});
      }
      return;
    }
  }
  res.json(users);
}

module.exports = function(app){
  app.get("/api/user", findUserByCredential);
  app.get("/api/user/:userId", findUserById);
  // app.get("api/user", findUserByUsername);
  // app.get("/api/user", findUserByUsername);
  // app.post("/api/user", createUser);


  var users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  function findUserByCredential(req,res){
    var username = req.query["username"];
    var password = req.query["password"];
    console.log(username);
    if (username && password) {
      var user = users.find(function (user){
        return user.username === username && user.password === password
      });
      if (user){
        res.send(user);
      } else {
        res.send({});
      }
      return;
    }
    // If the role of user is an admin, return a list of users
      res.send(users);
  }

/*  function findAlice(req, res) {
    res.json(users[0]);
  }*/

  function findUserById(req,res){
    var userId =  req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

   function findUserByUsername(req,res){
    var username = req.query["username"];
    // have some username value that is not undefined
    if (username) {
      // retrieve user whose username is equal to the given username
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.send(user);
      } else {
        res.send({});
      }
      return;
    }
     res.json(users);
  }

/*
   function createUser(req,res){
     var userId = Math.random().toString();
     users = users.post(function (user) {
       return users.add(user);
     });
     res.send(users);
   }

*/


}

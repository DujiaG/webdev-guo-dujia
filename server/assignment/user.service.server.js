module.exports = function(app){
  app.get("/api/user", findUserByCredential);
  app.get("/api/user/:userId", findUserById);
  // app.get("api/user", findUserByUsername);
  app.get("/api/user", findUserByUsername);
  app.post("/api/user", createUser);
  app.delete("/api/user/:userId", deleteUser);


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
        res.json(user);
      } else {
        res.json({});
      }
      return;
    } else if (username) {
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
    // If the role of user is an admin, return a list of users
      res.json(users);
  }*/

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

  function deleteUser(req, res){
    var userId = req.params['userId'];
    console.log(userId);
    console.log(userId);
    for (var i = 0; i < users.length; i++){
      if (users[i]._id === userId){
        users.splice(i,1);
      }
      res.json(users);
    }
  }



   function createUser(req,res){
     // var userId = (new Date()).getTime().toString();
     // everything comes from the client goes into the body?
     var user = req.body;
     users.push(user);
     res.json(user);

/*     users = users.post(function (user) {
       return users.add(user);
     });
     res.send(users);*/
   }




}

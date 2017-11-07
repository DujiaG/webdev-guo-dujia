module.exports = function(app){
  app.get("/api/user", findUserByCredential);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUserByUsername);
  app.post("/api/user", createUser);
  app.delete("/api/user/:userId", deleteUser);
  app.put("/api/user/:userId", updateUser);
  var userModel = require("../model/user/user.model.server");


/*
  var users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];
*/

  function findUserByCredential(req,res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
        console.log(result);
      });
      return;
    } else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
  }


/*
    // If the role of user is an admin, return a list of users
      res.json(users);
  }*/

  function findUserById(req,res) {
    var userId = req.params["userId"];
    userModel
      .findUserById(userId)
      .then(function (user) {
        res.json(user);
      })
  }


   function findUserByUsername(req,res){
    var username = req.query["username"];
    userModel
      .findUserByUsername(username)
      .then(function(user){
        res.json(user);
      })
    // have some username value that is not undefined
/*    if (username) {
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
     res.json(users);*/
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel
      .deleteUser(userId)
      .then(function (status) {
        res.send(status);
      });
  }


  function updateUser(req,res) {
    /*    updateUser(userId, user) {
          for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
              this.users[x] = user;
            }
          }
        }*/

    var userId = req.params['userId'];
    var user = req.body;
    console.log(user, "from server");
    userModel
      .updateUser(userId, user)
      .then(function (status) {
        res.send(status);
      });
  }

/*    var newUser = req.body;
    for (var i = 0; i < users.length; i++){
      if (users[i]._id === userId){
        users[i] = newUser;
        break;
      }
    }
    res.json(users);*/



   function createUser(req,res){
     // var userId = (new Date()).getTime().toString();
     // everything comes from the client goes into the body?
     var user = req.body;
     userModel.createUser(user)
       .then(function(user){
       res.json(user);
     });
   }



}


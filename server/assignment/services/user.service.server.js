module.exports = function(app){
  var passport = require('passport');
  var bcrypt = require("bcrypt-nodejs");
  app.get("/api/user", findUserByCredential);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUserByUsername);
  app.post("/api/user", createUser);
  app.delete("/api/user/:userId", deleteUser);
  app.put("/api/user/:userId", updateUser);
  app.post("/api/logout", logout);
  app.post('/api/loggedIn', loggedIn);
/*  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:4200/user',
      failureRedirect: 'http://localhost:4200/login'
    }));

  var facebookConfig = {
    clientID     : '944658295684913',
    clientSecret : '8f83840a26d92dd8a17999aa6f7ae1a4',
    callbackURL  : 'http://localhost:3100/auth/facebook/callback'
  };*/


  var userModel = require("../model/user/user.model.server");
  var LocalStrategy = require('passport-local').Strategy;
  // var FacebookStrategy = require('passport-facebook').Strategy;

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  // passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post('/api/register', register);
  // have passport look at the user, if the request is invalid, passport is going to abort
  // the request, respond with an unauthorized
  app.post('/api/login', passport.authenticate('local'), login);


/*  function findAllUsers(req, res) {
    userModel
      .findAllUsers()
      .then(function (users) {
        res.json(users);
      });
  }*/
/*

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }
*/


  function loggedIn(req, res){
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }


  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

 function localStrategy(usr,pass,done){
   userModel
     .findUserByUsername(usr)
     .then(function (user) {
       if (user.username === usr && bcrypt.compareSync(pass, user.password)) {
         return done(null, user);
       } else {
         return done(null, false);
       }
     })
 }

/*
  var users = [
    {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];
*/


// where we tell passport what to store in the cookie, the user object in this case.
  function serializeUser(user, done){
    done(null, user);
  }
// how to retrieve the user object from what comes in the cookie
  function deserializeUser(user,  done) {
    userModel
      .findUserById(user._id)
      .then(
        function (user){
          // passport provides a callback function to see if the user exists
          // passport stores the user in the session, in the server RAM, indexed by the cookie came in from browser
          done (null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req, res) {
    res.json(req.user);
    console.log(req.user);
  }

  function register(req, res){
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then(function(user){
        if (user) {
          // this user is currently log in so add to the session
          // as long as the session still valid, the user is a still logged in user
          // login is a new passport function that is added to the request object
          req.login(user, function (err) {
            res.json(user);
          })
        }
      });
  }

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


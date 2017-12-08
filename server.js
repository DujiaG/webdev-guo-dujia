/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// passport
// local strategy

// use cookie parser
// express session
// user passport

//for every client, make sure to parse the headers
 app.use(cookieParser());
//session takes a zsecret as argument, use this string to encrypt information from being intercepted
 app.use(session ({ secret: 'abcde15432z'}));
 app.use(passport.initialize());
 app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // change to localhost 4200 to define origin domain
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // allow credentials: true, allowing cors to send encrypted info
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require("./server/app.js")(app);


const port = process.env.PORT || '3100';
app.set('port', port);



// Create HTTP server
const server = http.createServer(app);

// var serverSide = require("./server/test-mongodb/app");
// serverSide(app);




//
// //map dynamic content to /api
// app.get("/api/hello", hello);
//
//
//   function hello(req,res){
//   //send back this text
//   res.send("Hello from Root Context handler")
//   }

// For Build: Catch all other routes and return the index file -- BUILDING
 app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
 });


 server.listen( port , () => console.log('Running'));


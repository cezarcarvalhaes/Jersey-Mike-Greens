//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 3000;

//Constructor for adding to reservation list
var Tables = function(name, phone, email, id){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}



//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  
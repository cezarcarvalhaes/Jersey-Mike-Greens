//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 3000;

//Constructor for adding to reservation list
var Guest = function(name, phone, email, id){
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
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  //Holds guest list
  var guestList =[];
  
  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newGuest = {
      name: $("#name").val().trim(),
      phone: $("#phone").val().trim(),
      email: $("#email").val().trim(),
      id: $("#id").val().trim(),
    
      //Function to add guest to the end of list
    addGuest = function(name, phone, email, id){
      guestList.push(name, phone, email, id);
    }
  };
    
    $.post("/api/add", newGuest)
      .then(function(data) {
        console.log("reservation.html", data);
        alert("Adding new reservation...");
      });
  });
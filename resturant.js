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
  
  // Displays all tables
app.get("/api/guest", function(req, res) {
  return res.json(guest);
});

// Displays a single table, or returns false
app.get("/api/guest/:guests", function(req, res) {
  var chosen = req.params.guests;

  console.log(chosen);

  for (var i = 0; i < guest.length; i++) {
    if (chosen === guest[i].routeName) {
      return res.json(guest[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/guest", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newGuest = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newGuest);

  characters.push(newGuest);

  res.json(newGuest);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

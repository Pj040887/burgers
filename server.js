var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-overide");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
 
// Overriide with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-hadlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// Import routes and give the server access to them.
var routes = require("./controllers/burger-controllers.js");

app.use("/", routes);

app.listen(port);
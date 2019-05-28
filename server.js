const express = require ("express");
const bodyParser = require ("body-parser");
const expressHandlebars = require ("express-handlebars");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 


const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars"); 

// const routes = require ("./contrllers/tacoController.js");

// app.use(routes);

console.log("Server is listening on: http://localhost: "  + PORT);
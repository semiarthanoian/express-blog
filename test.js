const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

var pathToView = path.join(__dirname, "view");
var pathToPublic = path.join(__dirname, "public");

app.set("views", pathToView);
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(pathToPublic));

app.get("*", async (request, response) => {
   response.render("index.ejs", {
      layout: "admin",
      action: null,
      data  : require("./data")
   });
}); // app.get

app.post("*", (request, response) => {
   response.json(request.body);
})

app.listen(8080, (_) => console.log("Server started"));

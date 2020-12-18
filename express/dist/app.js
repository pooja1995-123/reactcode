"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var path = require("path");

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "pro", "index.html"));
});
app.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname, "pro", "about.html"));
});
app.get("/contact", function (request, response) {
  response.sendFile(path.join(__dirname, "pro", "contact.html"));
});
app.get("/services", function (request, response) {
  response.sendFile(path.join(__dirname, "pro", "services.html"));
});
app.listen(5000, function (err) {
  if (err) throw err;
  console.log("server is running");
});
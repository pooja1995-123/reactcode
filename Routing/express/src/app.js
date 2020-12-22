import express from "express";
const app = express();

const path = require("path");
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "pro", "index.html"));
  });
  app.get("/about", (request, response) => {
    response.sendFile(path.join(__dirname, "pro", "about.html"));
  });
  app.get("/contact", (request, response) => {
    response.sendFile(path.join(__dirname, "pro", "contact.html"));
  });
  app.get("/services", (request, response) => {
    response.sendFile(path.join(__dirname, "pro", "services.html"));
  });
  app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server is running" );
  });
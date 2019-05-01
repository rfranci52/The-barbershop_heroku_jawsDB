// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // makeReservation route loads makerReservation.html
  app.get("/makeReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeReservation.html"));
  });

  // barberPortal route loads barberPortal.html
  app.get("/barberPortal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/barberPortal.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};

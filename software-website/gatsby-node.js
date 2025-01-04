const express = require("express");
const path = require("path");

exports.onCreateDevServer = ({ app }) => {
  app.use("/motion", express.static(path.join(__dirname, "public/motion")));
};

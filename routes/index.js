const express = require("express");
const routes = express.Router();
const fs = require("fs");

const createFile = (req, res) => {
  return 3;
};

routes.get("/", (req, res) => {
  console.log("object");
});

routes.post("/", createFile);

module.exports = routes;
module.exports.createFile = createFile;

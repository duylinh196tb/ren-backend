const express = require("express");
const routes = express.Router();
const createBE = require("./createBE");

routes.get("/", createBE);
routes.get("/xxx", (_, res) => {
  res.json({
    xxx: "xxx"
  });
});

routes.post("/create", createBE);

module.exports = routes;

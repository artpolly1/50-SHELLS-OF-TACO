const express = require("express");
const connection = require("../config/connection.js")
const router = express.Router();
const taco = require("../models/taco.js");

router.get("/", function(req, res) {
  taco.selectAll(function(data) {
    let hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tacos", function(req, res) {
  //table, cols, vals, cb
  console.log('testing this function call');
  taco.insertOne([
    "taco_name", "picked_up"
  ], [
    req.body.taco_name, 0
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  
  taco.updateOne({
    picked_up: 1
  }, condition, function(result) {
    res.json({ id: result.insertId });
  });


});

module.exports = router;


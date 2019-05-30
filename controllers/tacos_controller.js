const express = require("express");
const router = express.Router();
const taco = require("../models/taco.js/index.js");

router.get("/", function(request, response) {
  taco.selectAll(function(data) {
    let hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tacos", function(request, response) {
  taco.insertOne([
    "taco_name", "devoured"
  ], [
    req.body.taco_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

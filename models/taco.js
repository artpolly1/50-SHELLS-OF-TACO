const orm = require("../config/orm")

let  taco = {
  selectAll: function(cb) {
    orm.selectAll("tacos", function(response) {
      cb(response);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("tacos", cols, vals, function(response) {
      cb(response);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("tacos", objColVals, condition, function(response) {
      cb(response);
    });
  }
};

module.exports = taco;
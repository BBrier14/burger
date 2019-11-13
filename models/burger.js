// Requirements
//=============================
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

//=============================

// Export burger
//=============================
module.exports = burger;

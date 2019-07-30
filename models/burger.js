var orm = require("../config/orm");

var burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {


            cb(res);
        });
    },

    insert: function (name, cb) {

        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    
    },

    update: function (objColVals, condition, cb) {

        orm.updateOne("burgers", objColVals, condition, cb);

    }



};


module.exports = burger;

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

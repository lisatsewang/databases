var db = require('../db');
var utils = require('./utils');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


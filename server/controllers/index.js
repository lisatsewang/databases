var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.connection.query('select * from messages', function(err, rows, fields) {
        if (err) throw err;
        res.end(JSON.stringify(rows));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      db.connection.query('insert into messages set ?', req.body, function(err, results) {
        if (err) {
          console.log(err);
        } else {
        }
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.connection.query('select * from users', function(err, rows, fields) {
        if (err) throw err;
        res.end(JSON.stringify(rows));
      });
    },
    post: function (req, res) {
      db.connection.query('insert into users set ?', req.body, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log(results.length);
        }
        res.end();
      });
    }
  }
};
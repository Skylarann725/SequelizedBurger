// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log('queryString', queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, burger_name, cb) {
    var insertString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
    console.log('insertString', insertString);

    connection.query(insertString, [table, burger_name, 0], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, id, cb) {
    var updateString = "UPDATE ?? SET devoured = 1 WHERE id = ?";
    console.log('updateString', updateString);

    connection.query(updateString, [table, id], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
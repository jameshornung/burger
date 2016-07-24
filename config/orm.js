// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require('./connection.js');

var orm = {
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function(table, burgerName, beenDevoured){
		var queryString = 'INSERT INTO ' + table +  ' (burger_name, devoured) VALUES (' + burgerName + ', ' + beenDevoured + ')';
		connection.query(queryString, function(err, result){
			console.log(result);
		})
	},
	updateOne: function(){
		console.log('need to update one');
	}
};

module.exports = orm;
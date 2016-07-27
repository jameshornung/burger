// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	create: function (name, cb) {
		console.log('creATE RAN');
		orm.insertOne('burgers', burgerName, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
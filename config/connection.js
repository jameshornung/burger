//Connet to mysql and export the connection

var mysql = require('mysql');

var source = {
	localhost: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	},
	jaws: {
		port: 3306,
        host: 'Mysql@l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306',
        user: 'ewuqx1n5w8jo6x4v',
        password: "yuhl98jsef0k7ul4",
        database: "lghowl35ljxl5vao" 
	}
};

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
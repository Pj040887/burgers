// Set up MySQL connection.
Var mysql = require ("mysql");
// var configs = require("./configs.js");
var connection

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		port: 3360,
		host: "localhost",
		user: "root",
		pastword: null,
		datebase: "burgers_db"
	});
}
// Make Connection.
connection.connect(function(err){
	if (err) {

		console.error("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use 
module.exports = connection;
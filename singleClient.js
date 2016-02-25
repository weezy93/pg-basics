var pg = require("pg");
var connectionString = 'postgres://localhost:5432/pgintro';
var client = new pg.Client(connectionString);
client.connect();

// client.query("INSERT INTO cities (name, country, rating) VALUES ('New York City', 'United States', 4);", function(err, result){
// 		client.end();
// });


// client.query("SELECT * FROM cities WHERE id = 3;", function(err, result){
// 	if(!err){
// 		console.log("single city: ", result.rows);
// 	} else {
// 		console.log(err);
// 	}
// 	client.end();
// });

// client.query("UPDATE cities SET rating = 9 WHERE name= 'Chicago';", function(err, result){
// 	if(!err){
// 		console.log('updating');
// 	} else {
// 		console.log(err);
// 	}
// 	client.end();
// });

client.query("DELETE FROM cities WHERE name = 'New York City';", function(err, result){
	console.log('deleting');
	client.end();
});

client.query("SELECT * FROM cities", function(err, result){
	console.log("table: ", result.rows);
	client.end();
});

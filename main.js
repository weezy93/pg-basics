// var pg = require('pg');
// var connectionString = 'postgres://localhost:5432/pgclientside';
// var client = new pg.Client(connectionString);
// client.connect();

// pg.connect(connectionString,function(err, client, done) {

//     if(err) {
//             done();
//             console.log(err);
//         }

//     var query = client.query('SELECT * FROM teas');

//     query.on('row', function(row) {
//         console.log(row);
//     });

//     query.on('end', function() {
//         done();
//     });

// });

// var query = client.query("SELECT id, name, flavor FROM teas;", function(err, result) {
//     console.log(result.rows);
// });
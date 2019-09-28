var mysql      = require('mysql');



exports.query = function(queryText, callback) {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'school'
      });
       
      connection.connect();
       
      connection.query(queryText, function (error, results, fields) {
        if (error) callback(error);
        else callback(undefined, results);
        connection.end();
      });
}

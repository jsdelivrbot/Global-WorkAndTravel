/*
 * Written by:  Saeed Ghiassy
 * File: NodeJS-Server.js
 * 
 * Description:
 * This is a Server sides NodeJS file that communicates to MySQL database
 * in order to insert/retrive data.
 * The server response would be based on Get or Post request.            
 * 
 * 
 */

//Defining global varibales and using libraries
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var mysql      = require('mysql');


//Parsing incoming HTTP request to deal with GET or POST requests
app.use(bodyParser.urlencoded({ extended: true })); 

///////////////////////////////////////////////////////////////////////////////
// If the HTTP request is Post and its been send to http://xxx/setNode
// then it parse the data and save the record into database and the generates
// a response to user.
///////////////////////////////////////////////////////////////////////////////

app.post('/setNode', function(req, res) {
    //Obtaining data from index.html
    var FirstName = req.body.FirstName;
    var LastName = req.body.LastName;
    var Age = req.body.Age;
    var Email = req.body.Email;
    var Country = req.body.Country;
    var Phone = req.body.Phone;
    var Date = req.body.Date;
    
//initilizing the connection to Database    
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'XXXXXXX', //-- sorry but password is hidden for security purposes :)
  database : 'Global_Work' //database name, i also included the SQL file for convenience
});

//Establishing connection to MySQL database
connection.connect();

//Generating Query to insert into table
var DataArray = { First_Name: FirstName , Last_Name: LastName, Age: Age, Email: Email,
                  Country: Country, Phone:Phone, Date: Date};

var queryString = 'INSERT INTO G_Table SET ?';
 
connection.query(queryString, DataArray , function(err, rows, fields) {
    if (err) throw err;
});

console.log('[+]Data Successfully added.');
connection.end();

//Dynamic Response to user
res.send('<h2>Data Sucessfully Added to Database!</h2><br><a href="http://127.0.0.1/index.html">Go Back!</a>');
});
/////////// End of Post

///////////////////////////////////////////////////////////////////////////////
// If the HTTP request is GET and its been send to http://xxx/getNode
// then it generates a JSON response with the information from Database
///////////////////////////////////////////////////////////////////////////////
app.get('/getNode', function(req, res) {
 getSQL(function(err, result) {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type' : 'text/html'
      //'Content-Type' : 'x-application/json'
      
    });
    res.end(result);
  });
});

///////////////////////////////////////////////////////////////////////////////
// Obtain Data record and generates dynamic response in JSON format
// for further processing
///////////////////////////////////////////////////////////////////////////////
function getSQL(callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'XXXXXXXX', ////
      database : 'Global_Work'
    });

    connection.connect();
    var json = '';
    var query = 'SELECT * FROM G_Table';
    connection.query(query, function(err, results, fields) {
        if (err)
            return callback(err, null);

        //////For debugging purposes        
        console.log('The query-result is: ', results[0]);

        // wrap result-set as json
        json = JSON.stringify(results);

        /***************
        * Correction 2: Nest the callback correctly!
        ***************/
        connection.end();
        
        //////For debugging purposes        

        console.log('JSON-result:', json);
        callback(null, json);
    });
};


///////////////////////////////////////////////////////////////////////////////
// Server Application will binds and listen to port 3030
// ******
// ****** Please make sure this port is not blocked by firewall for testing
// ******
///////////////////////////////////////////////////////////////////////////////
app.listen(3030, function() {
  console.log('Server running at http://127.0.0.1:3030/');
});
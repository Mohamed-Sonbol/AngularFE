var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 

app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11504269',
    password: 'TZJR8LWAb7',
    database: 'sql11504269',
    port: '3306'
});
 
// connect to database
dbConn.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
    
      console.log('connected as id ' + dbConn.threadId);
  }); 
// Retrieve all users 
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM students', function (error, results, fields) {
        if (error) throw error;
        console.log(res);
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});
// Retrieve user with id 
app.get('/view-course', function (req, res) {

 
    dbConn.query('SELECT * FROM courses', function (error, results, fields) {
        if (error) throw error;
        console.log(res);
        return res.send({ error: false, data: results, message: 'users list.' });
    });
 
});
// Add a new user  
app.post('/add-user', function (req, res) {
 
    let user = req.body;
 console.log(user)
    if (!user) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }

    dbConn.query(`INSERT INTO students (name) values ('${user.Studentname}')`, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});
//  Update user with id
app.put('/update-user', function (req, res) {
 
    let user_id = req.body.id;
    let user = req.body.data;
    console.log(user)
    console.log(user_id)
    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }
 
    dbConn.query("UPDATE students SET name = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});
//  Delete user
app.put('/delete-user', function (req, res) {
 
    let user_id = req.body.id;
 
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM students WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
}); 
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;
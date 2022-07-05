var Request = require('tedious').Request;

require('dotenv').config(
    { path: '../../../Configs/dev.env' }
);

const SERVER_NAME = process.env['SERVER_NAME'];
const USER_NAME = process.env['USER_NAME'];
const PASSWORD = process.env['PASSWORD'];
const DATABASE = process.env['DATABASE']

var Connection = require('tedious').Connection;  
var config = {  
    server: SERVER_NAME,  //update me,
    authentication: {
        type: 'default',
        options: {
            userName: `${USER_NAME}`, //update me
            password: `${PASSWORD}`  //update me
        }
    },
    options: {
        "database": `${DATABASE}`,
        "port": 1433,
        // If you are on Microsoft Azure, you need encryption:
        // encrypt: false,
        // database: `${DATABASE}`  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    if(err) {
        console.log('Error: ', err)
    } else {
        // If no error, then good to proceed.
        console.log('Connected!')
    }
});

// connection.connect();

function sql_request() {
    let request = new Request("select 42, 'hello world'", function(err, rowCount) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rowCount)
    });
    connection.execSql(request);
}
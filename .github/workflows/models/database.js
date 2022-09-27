const mysql=require('mysql2');
//create connection
const db=mysql.createPool({

    host:'localhost',  
    user:'root',
    password:'examly',
    database:'foodfox_db'
});

db.getConnection( (err, connection)=> {
    if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)
 })


module.exports=db;
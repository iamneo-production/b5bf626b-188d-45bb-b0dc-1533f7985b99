const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoute=require("./routes/user");
const bcrypt = require("bcrypt")
const db=require("./models/database");
var cors = require("cors");

const mysql=require('mysql2/promise');
const { response } = require('express');
dotenv.config();
app.use(express.json());
app.use("/users",userRoute);
app.use(cors());


const router = express.Router();

app.post('/response', (req, res) => {
    console.log("connected");
    res.header("Access-Control-Allow-Origin", "*");
    const user = req.body.name;
    const hashedPassword =req.body.password
    const email = req.body.email;
    const phone = req.body.phone;
    db.getConnection( async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM user WHERE username = ?"
        const search_query = mysql.format(sqlSearch,[user])
        const sqlInsert = "INSERT INTO `user` ( `username`, `password`, `email`,`mobilenumber`) VALUES (?, ?, ?, ?)"
        const insert_query = mysql.format(sqlInsert,[user, hashedPassword, email, phone])
     connection.query (search_query, async (err, result) => {
        if (err) throw (err)
        console.log("------> Search Results")
        console.log(result.length)
        if (result.length != 0) {
          // res.sendStatus(409)
          res.send("User already exists")
            connection.release()
            console.log("------> User already exists")

        } 
        else {
             connection.query (insert_query, (err, result)=> {
            // res.sendStatus(201)
            res.redirect('/home')
            connection.release()
            if (err) throw (err)
            console.log ("--------> Created new User")
            console.log(result.insertId)
           })
          }
        })
    })
});

app.post('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let username = req.body.name;
	let password = req.body.password;
  console.log(username);
  if (username && password) {
      // Execute SQL query that'll select the account from the database based on the specified username and password
      db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          // Redirect to home page
          console.log("login successfull")
          res.redirect('/home-comp');
        } else {
          res.send('Incorrect Username and/or Password!');
          console.log("Incorrect Username and/or Password!")
        }			
        res.end();
      });
    } else {
      console.log("Please enter Username and Password!");
      response.send('Please enter Username and Password!');
      response.end();
    }
  }
    

  
  );





app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
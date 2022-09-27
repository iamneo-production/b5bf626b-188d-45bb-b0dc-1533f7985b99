const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoute=require("./routes/user");
const bcrypt = require("bcrypt")
const db=require("./models/database");

const mysql=require('mysql2/promise');
dotenv.config();
app.use(express.json());
app.use("/users",userRoute);
app.post("/register", async (req,res) => {
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const email = req.body.email;
    const phone = req.body.phone;
    db.getConnection( async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM user WHERE usename = ?"
        const search_query = mysql.format(sqlSearch,[user])
        const sqlInsert = "INSERT INTO `user` ( `usename`, `password`, `email`,`mobilenumber`) VALUES (?, ?, ?, ?)"
        const insert_query = mysql.format(sqlInsert,[user, hashedPassword, email, phone])
     connection.query (search_query, async (err, result) => {
        if (err) throw (err)
        console.log("------> Search Results")
        console.log(result.length)
        if (result.length != 0) {
            connection.release()
            console.log("------> User already exists")
            res.sendStatus(409) 
        } 
        else {
             connection.query (insert_query, (err, result)=> {
            connection.release()
            if (err) throw (err)
            console.log ("--------> Created new User")
            console.log(result.insertId)
            res.sendStatus(201)
           })
          }
        })
    })
})



app.listen(8080,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})

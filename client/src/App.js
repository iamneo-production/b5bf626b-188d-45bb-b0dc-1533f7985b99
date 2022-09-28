const express =require('express');
const mysql=require('mysql');

//create connection
const db=mysql.createConnection({

    host:'8081',  
    user:'root',
    password:'root',
    database:'database'
});


//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql connected...');
});

const app=express();

//Create DB
app.get('/getdb',(req,res)=>{
    let sql='CREATE DATABASE';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

//Create table
app.get('/createpoststable',(req,res)=>{
    let sql='CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY ,title VARCHAR(255),body VARCHAR(255))';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send('POSTs table created...');
    });
});

//INSERT POST 1
 app.get('/addpost1',(req,res)=>{
     let post={title:'post two',body:'this is post number two'};
     let sql='INSERT INTO posts SET ?';
     let query=db.query(sql,post,(err,result)=>{
         if(err) throw err;
         console.log(result);
         res.send('post 1 added...');
     })
 })
//accessing data from database
app.get('/getposts',(req,res)=>{
    let sql='SELECT * FROM posts';
    let query =db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('POSTS fetched..');
    })
})
//accessing posts from database with id number
app.get('/getpost/:id',(req,res)=>{
    let sql=`SELECT * FROM posts WHERE id=${req.params.id}`;
    let query =db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
       //document.body.innerHTML=result.body;
    res.send("post obtained..");
    })
})
app.listen('8081',()=>{
    console.log('server started on port 8081');
});


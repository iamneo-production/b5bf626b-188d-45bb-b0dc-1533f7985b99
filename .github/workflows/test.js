const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoute=require("./routes/user");
app.use(express.json());
app.use("/users",userRoute);


app.listen(8080,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
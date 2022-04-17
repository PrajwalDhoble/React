const express = require('express')
const cors = require('cors')
const body_parser = require("body-parser")
const connect = require("./src/config/db")
const accessSchema= require("./src/controllers/adminaccess.controller")
const teacherSchema= require("./src/controllers/teacher.controller")
const {register, login,newToken} = require("./src/controllers/auth.controller")

const app = express()
require('dotenv').config();
app.use(body_parser.json())


const corsOptions = {
    origin: '*',
    credentials:true,
    optionSuccessStatus:200,
}
  
  app.use(cors(corsOptions))
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
  
  app.use("/access",accessSchema)
  app.use("/teacher",teacherSchema)
  app.post("/register",register);
  app.post("/login",login);

app.listen(3002, async () =>{
    try{
        await connect()
        console.log(`listening on port 3002`)      
    } catch(err){
        console.log('error:', err.message)
    }
})
const express=require("express");
const {connection} =require("./config/db");
const { authRouter } = require("./routes/auth.route");
const { appointmentRouter } = require("./routes/appointment.route");
require("dotenv").config();

const app=express();
const port =process.env.PORT || 8080

//middleware
app.use(express.json());
app.use("/",authRouter)
app.use("/",appointmentRouter);




// server 
app.listen(port, async()=>{
    try {
        
        console.log("server is running on port 8080");
        await connection;
        console.log("db connect successfully")
    } catch (error) {
        console.log("something went's wrong")
        console.log("server connnection error");
    }

})
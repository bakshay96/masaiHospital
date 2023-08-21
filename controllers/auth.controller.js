const {AuthModel} =require("../models/auth.model");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');

const signup =async (req,res)=>{
    const {email,password,} =req.body;

    try {

        bcrypt.hash(password, 4, async (err, hash)=> {
            // Store hash in your password DB.
            const user=new AuthModel({email,password:hash})
            await user.save();
            res.status(200).send({"msg":"Registration has been done "})
        });
        
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}


//login 
const login =async (req,res)=>{
    const {email,password,} =req.body;

    try {
        const user= await AuthModel.findOne({email});
        console.log(user);
        if(user)
        {

            bcrypt.compare(password, user.password,(err,result)=> {
                if(result)
                {
                    console.log("login done")
                    res.status(200).send({"msg":"Login successfully done ","token":jwt.sign({ "auth": 'bar' }, 'shhhhh')})
                }
                else
                {
                    console.log("wrong redentials")
                    res.status(400).send({"msg":"Wrong credentials "})
                }
                // result == true
            });
        }
        
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}

module.exports={
    signup,
    login
}
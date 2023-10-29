const express = require("express");
const User = require("../../Schemas/User/Register");  //schema
const SuperAdminLogin = {};


const LoginDetails = require('../../Routers/Login/Login')

SuperAdminLogin.post = async (req,res)=>{
    const loginCred =req.body.data;
    console.log(loginCred.email);
    User.findOne({ email: loginCred.email }).then(user => {
       return LoginDetails( req,res,user);
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            message: "Internal server Error!!"
        })
    })
}
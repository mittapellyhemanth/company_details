const express = require("express");

const SuperAdminRouter = express.Router();
const User = require('../../Schemas/User/Register')
require('dotenv').config();
const LoginDetails = require('../Login/Login');

SuperAdminRouter.post("/login", async (req, res) => {
    const loginCred =req.body.data;
    console.log(req);
    User.findOne({ email: loginCred.email }).then(user => {
        LoginDetails( req,res,user);
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            message: "Internal server Error!!"
        })
    })
})
const postAdmin = require('../../Controllers/superAdmin/addAdmin')
SuperAdminRouter.post('/addAdmin',postAdmin.post);

const getAdmins = require('../../Controllers/superAdmin/getAdmins');
SuperAdminRouter.get('/admins',getAdmins.get)

module.exports = SuperAdminRouter;
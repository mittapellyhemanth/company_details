const express = require("express");
const AddEmployee = require("../../Schemas/Admin/AddEmployee");  //schema
const AddProject = require('../../Schemas/Admin/AddProjects');
const AdminRouter = express.Router();

require('dotenv').config();

const AddAdminModel = require('../../Schemas/SuperAdmin/AddAdmin');
const LoginDetails = require('../Login/Login');

AdminRouter.post("/login", async (req, res) => {
    const loginCred =req.body;
    AddAdminModel.findOne({ email:loginCred.email }).then(user => {
        console.log(req.body,'login');

        LoginDetails( req,res,user);
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            message: "Internal server Error!!"
        })
    })
})


AdminRouter.post("/addProject", async (req, res) => {

    try {
        const { projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted } = req.body;

        const AddedprojectData = new AddProject({

            projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted
        })

        AddedprojectData.save()
        res.status(200).json({
            message: "AddedprojectData saved sucessfully"
        })
    }
    catch (err) {
        res.status(500).json({
            message: "unable to save AddedprojectData",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
    }


})
const postEmployee = require('../../Controllers/Admin/addEmployee');

AdminRouter.post("/addEmployee", postEmployee.post);


module.exports = AdminRouter;

const express = require("express");
const AddEmployee = require("../../src/Schemas/Admin/AddEmployee");  //schema
const AddProject = require('../../src/Schemas/Admin/AddProjects');
const AdminRouter = express.Router();

require('dotenv').config();



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

AdminRouter.post("/addEmployee", async (req, res) => {

    try {
        const { AdminName, Address, PhoneNumber,Email,Password,Aadhaar } = req.body;

        const addEmployee = new AddEmployee({
            AdminName, Address, PhoneNumber,Email,Password,Aadhaar
        })

        addEmployee.save()
        res.status(200).json({
            message: " addEmployee data saved sucessfully"
        })
    }
    catch (err) {
        res.status(500).json({
            message: "unable to save addEmployee data",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
    }


})


module.exports = AdminRouter;

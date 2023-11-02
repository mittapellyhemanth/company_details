
const express = require("express");
const AddProjects = require("../../Schemas/Admin/AddProjects");  //schema

const postProject = {};
postProject.post = async (req, res) => { 
   try {
        const { projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted } = req.body;

        const AddProjects = new AddProject({

            projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted
        })

        AddProjects.save()
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

}
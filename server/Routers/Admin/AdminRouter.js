const express = require("express");

const AddProject = require('../../Schemas/Admin/AddProjects');
const AdminRouter = express.Router();

require('dotenv').config();

const AddAdminModel = require('../../Schemas/SuperAdmin/AddAdmin');
 //..................LOGIN ADMIN .................................................................................
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

 //..................Add project .................................................................................
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

//..................get PROJECTS .................................................................................
const getProjects = require('../../Controllers/Admin/getProject');
AdminRouter.get("/getProject", getProjects.get);

//..................Add,Get Employee .................................................................................
const postEmployee = require('../../Controllers/Admin/SEO/AddSeo');
AdminRouter.post("/addSeo", postEmployee.post);
//....get Employee .....
const getEmployee = require('../../Controllers/Admin/SEO/GetSeo');
AdminRouter.get("/getSeo", getEmployee.get);


//..................Add,Get DESIGNER .................................................................................
const addDesigner = require('../../Controllers/Admin/Designer/AddDesigner');
AdminRouter.post("/addDesigner", addDesigner.post);
//GET designer
const getDesginer = require('../../Controllers/Admin/Designer/GetDesigner');
AdminRouter.get("/getDesigner", getDesginer.get);



//..................Add,Get Writer .................................................................................
const addWriter = require('../../Controllers/Admin/Writer/addWriter');
AdminRouter.post("/addWriter", addWriter.post);
//GET designer
const getWriter = require('../../Controllers/Admin/Writer/getWriter');
AdminRouter.get("/getWriter", getWriter.get);

const getOneSeo = require('../../Controllers/Admin/SEO/GetSeo');
AdminRouter.get("/getOneSeo/:id", getOneSeo.getOne);

module.exports = AdminRouter;
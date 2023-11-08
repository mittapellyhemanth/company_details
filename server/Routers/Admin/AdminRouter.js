const express = require("express");
const auth = require('../../Authentication/Auth')
const AddProject = require('../../Schemas/Admin/AddProjects');
const AdminRouter = express.Router();

require('dotenv').config();

const AddAdminModel = require('../../Schemas/SuperAdmin/AddAdmin');
 //..................LOGIN ADMIN .................................................................................
const LoginDetails = require('../Login/Login');

AdminRouter.post("/login", async (req, res) => {
    const loginCred =req.body;
    console.log(loginCred,'adminlog');
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
AdminRouter.post("/addProject/:id",auth, async (req, res) => {


    try {
        const { projectName, websiteAddress, clientName, startDate, monthlyPrice,empyDesignation, employeeAlloted,employID} = req.body;

        const AddedprojectData = new AddProject({
            addedAdminId:req.params.id,
            projectName, websiteAddress, clientName, startDate, monthlyPrice,empyDesignation, employeeAlloted,employID
           
        })
if(empyDesignation){
   await AddedprojectData.save()
    res.status(200).json({
        message: "AddedprojectData saved sucessfully"
    })
}else{
    res.status(400).json({
        message: "please check details"
    })
}
       
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
AdminRouter.get("/getProject/:id",auth, getProjects.get);

//..................Add,Get Employee .................................................................................
const postEmployee = require('../../Controllers/Admin/SEO/AddSeo');
AdminRouter.post("/addSeo/:id",auth, postEmployee.post);
//....get Employee .....
const getEmployee = require('../../Controllers/Admin/SEO/GetSeo');
AdminRouter.get("/getSeo/:id",auth, getEmployee.get);


//..................Add,Get DESIGNER .................................................................................
const addDesigner = require('../../Controllers/Admin/Designer/AddDesigner');
AdminRouter.post("/addDesigner/:id",auth, addDesigner.post);
//GET designer
const getDesginer = require('../../Controllers/Admin/Designer/GetDesigner');
AdminRouter.get("/getDesigner/:id",auth, getDesginer.get);

const getOneDesginer = require('../../Controllers/Admin/Designer/GetDesigner');
AdminRouter.get("/getOneDesigner/:id",auth, getOneDesginer.getOne);

//..................Add,Get Writer .................................................................................
const addWriter = require('../../Controllers/Admin/Writer/addWriter');
AdminRouter.post("/addWriter/:id",auth, addWriter.post);
//GET designer
const getWriter = require('../../Controllers/Admin/Writer/getWriter');
AdminRouter.get("/getWriter/:id",auth, getWriter.get);

const getOneWriter = require('../../Controllers/Admin/Writer/getWriter');
AdminRouter.get("/getOneWriter/:id",auth, getOneWriter.getOne);


const getOneSeo = require('../../Controllers/Admin/SEO/GetSeo');
AdminRouter.get("/getOneSeo/:id",auth, getOneSeo.getOne);

module.exports = AdminRouter;
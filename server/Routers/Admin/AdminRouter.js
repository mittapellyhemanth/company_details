const express = require("express");
const auth = require("../../Authentication/Auth");
const AddProject = require("../../Schemas/Admin/AddProjects");
const AdminRouter = express.Router();
const getEmployee = require("../../Controllers/Admin/SEO/GetSeo"); // get SEO
const getDesginer = require("../../Controllers/Admin/Designer/GetDesigner"); //get Designer
const getWriter = require("../../Controllers/Admin/Writer/getWriter"); //get Writer
require("dotenv").config();

const AddAdminModel = require("../../Schemas/SuperAdmin/AddAdmin");
//..................LOGIN ADMIN .................................................................................
const LoginDetails = require("../Login/Login");

AdminRouter.post("/login", async (req, res) => {
  const loginCred = req.body;
  console.log(loginCred, "adminlog");
  AddAdminModel.findOne({ email: loginCred.email })
    .then((user) => {
      console.log(req.body, "login");

      LoginDetails(req, res, user);
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({
        message: "Internal server Error!!",
      });
    });
});

//..................Add project .................................................................................
AdminRouter.post("/addProject/:id", auth, async (req, res) => {
  try {
    const {
      projectName,
      websiteAddress,
      clientName,
      startDate,
      monthlyPrice,
      empyDesignation,
      employeeAlloted,
      employID,
    } = req.body;
    
if ( req.body.projectName && req.body.clientName && req.body.employeeAlloted && employID) {
  req.body.projectName = req.body.projectName.toUpperCase();
  req.body.employeeAlloted = req.body.employeeAlloted.toUpperCase();
  req.body.clientName =req.body.clientName.toUpperCase();
  req.body.employID =req.body.employID.toUpperCase();
}
   
      const AddedprojectData = new AddProject({
        addedAdminId: req.params.id,
       ...req.body,
        date: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      });
      if (empyDesignation) {
        await AddedprojectData.save();
        res.status(200).json({
          message: "AddedprojectData saved sucessfully",
        });
      } else {
        res.status(400).json({
          message: "please check details",
        });
      }
   
    
  } catch (err) {
    res.status(500).json({
      message: "unable to save AddedprojectData",
      // detail: err   //this line to be used to check error
    });
    console.log(err);
  }
});






//..................get PROJECTS .................................................................................
const getProjects = require("../../Controllers/Admin/getProject");
AdminRouter.get("/getProject/:id", auth, getProjects.get);

//..................Add,Get Employee .................................................................................
const postEmployee = require("../../Controllers/Admin/SEO/AddSeo");
AdminRouter.post("/addSeo/:id", auth, postEmployee.post);
//....get Employee .....

AdminRouter.get("/getSeo/:id", auth, getEmployee.get);

//..................Add,Get DESIGNER .................................................................................
const addDesigner = require("../../Controllers/Admin/Designer/AddDesigner");
AdminRouter.post("/addDesigner/:id", auth, addDesigner.post);
//GET designer

AdminRouter.get("/getDesigner/:id", auth, getDesginer.get);

const getOneDesginer = require("../../Controllers/Admin/Designer/GetDesigner");
AdminRouter.get("/getOneDesigner/:id", auth, getOneDesginer.getOne);

//..................Add,Get Writer .................................................................................
const addWriter = require("../../Controllers/Admin/Writer/addWriter");
AdminRouter.post("/addWriter/:id", auth, addWriter.post);
//GET designer

AdminRouter.get("/getWriter/:id", auth, getWriter.get);

const getOneWriter = require("../../Controllers/Admin/Writer/getWriter");
AdminRouter.get("/getOneWriter/:id", auth, getOneWriter.getOne);

const getOneSeo = require("../../Controllers/Admin/SEO/GetSeo");
AdminRouter.get("/getOneSeo/:id", auth, getOneSeo.getOne);

// tracking attendance

const AttendanceOfEmployee = require("../../Schemas/Admin/Employees/Attendance");
AdminRouter.post("/trackAttendance/:id", async (req, res) => {
  try {
    const { Date, LoginTime, LogoutTime, TotalBreak, TotalWorkTime } = req.body;

    const TrackAttendance = new AttendanceOfEmployee({
      EmployeeId: req.params.id,
      Date,
      LoginTime,
      LogoutTime,
      TotalBreak,
      TotalWorkTime,
    });

    await TrackAttendance.save()
    
  } catch (err) {
   
    console.log(err);
  }
});

AdminRouter.get("/employe/Attendance/:id",async(req,res)=>{
    try {
        await AttendanceOfEmployee.find({EmployeeId:req.params.id}).then((result)=>{
         res.status(200).json({
            data:result
         })
        })
    } catch (error) {
        console.log(error)
    }
})






module.exports = AdminRouter;

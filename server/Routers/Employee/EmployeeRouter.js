const express = require("express");
const projectSchema = require("../../Schemas/Employee/Projects"); //schema
const LeaveSchema = require("../../Schemas/Employee/Leave");
const Seo = require("../../Schemas/Admin/Employees/SEO");
const Designer = require("../../Schemas/Admin/Employees/Designer");
const Writer = require("../../Schemas/Admin/Employees/Writer");
const Sales = require("../../Schemas/Admin/Employees/Sales");
const LoginDetails = require("../Login/Login");
const getProjects = require("../../Schemas/Admin/AddProjects");

const EmployeeRouter = express.Router();
const auth = require("../../Authentication/Auth");
require("dotenv").config();

EmployeeRouter.post("/login", async (req, res) => {
  const loginCred = req.body;
  try {
    const SeoEmployee = await Seo.findOne({ email: loginCred.email });
    if (SeoEmployee) {
      return LoginDetails(req, res, SeoEmployee);
    }
    const DesignerEmployee = await Designer.findOne({ email: loginCred.email });

    if (DesignerEmployee) {
      return LoginDetails(req, res, DesignerEmployee);
    }
    const WriterEmployee = await Writer.findOne({ email: loginCred.email });
    if (WriterEmployee) {
      return LoginDetails(req, res, WriterEmployee);
    }
    const SalesEmployee = await Sales.findOne({ email: loginCred.email });
    if (SalesEmployee) {
      return LoginDetails(req, res, SalesEmployee);
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error!!",
      error: err,
    });
  }
});

EmployeeRouter.post("/project", auth, async (req, res) => {
  try {
    const { BackLink, Keyword, Type, Status, Remark, TimeTaken } = req.body;

    const projectData = new projectSchema({
      BackLink,
      Keyword,
      Type,
      Status, //need to get the conditions
      Remark,
      TimeTaken,
    });

    projectData.save();
    res.status(200).json({
      message: "data saved sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "unable to save data",
      // detail: err   //this line to be used to check error
    });
    console.log(err);
  }
});

EmployeeRouter.post("/leave", auth, async (req, res) => {
  try {
    const { ReasonForAbsent, ChooseDate, NoOfDays } = req.body;

    const LeaveData = new LeaveSchema({
      ReasonForAbsent,
      ChooseDate,
      NoOfDays,
    });

    LeaveData.save();
    res.status(200).json({
      message: " Leave data saved sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "unable to save Leave data",
      // detail: err   //this line to be used to check error
    });
    console.log(err);
  }
});
// get projects
EmployeeRouter.get("/details/:id", async (req, res) => {
  console.log(req);
  try {
    const data = await getProjects.find({ employID: req.params.id });
    res.status(200).json(data);
    console.log(data, "data");
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      err: error,
    });
  }
});

///project submit

const SeoProjectSubmit = require("../../Schemas/Employee/ProjectSubmit/SeoProject");

EmployeeRouter.post("/project/submit/:id", async (req, res) => {
  try {
    const emplyId = req.params.id.toUpperCase() ;
    console.log(emplyId,'emply');
    const formDataArray = req.body;
    const projects = [];
    console.log(formDataArray, "formDataArray");

    // Iterating through form data array and creating new project documents 
    if (formDataArray.length >= 1) {
      for (let i = 0; i < formDataArray.length; i++) {
        const formData = formDataArray[i];
        const { BackLink, Keyword, Type, Status, Remark, TimeTaken } = formData;
        
        if (BackLink && Keyword && Type && Status && Remark && TimeTaken) {
          const project = new SeoProjectSubmit({
            EmployeeId:emplyId ,
            BackLink,
            Keyword,
            Type,
            Status,
            Remark,
            TimeTaken,
          });
          projects.push(project);
          await project.save();
        }
      }
      res.status(200).json(projects);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = EmployeeRouter;
// 65449478aae261874b96830a

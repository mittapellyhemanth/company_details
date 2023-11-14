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
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
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
  // console.log(req);
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

///project seo submit

const SeoProjectSubmit = require("../../Schemas/Employee/ProjectSubmit/SeoProject");

EmployeeRouter.post("/project/submit/:id/:projectName", async (req, res) => {
  try {
    const emplyId = req.params.id.toUpperCase();

    const formDataArray = req.body;
    const projects = [];
    // console.log(formDataArray, "formDataArray");

    // Iterating through form data array and creating new project documents
    if (formDataArray.length >= 1) {
      for (let i = 0; i < formDataArray.length; i++) {
        const formData = formDataArray[i];
        const { BackLink, Keyword, Type, Status, Remark, TimeTaken } = formData;

        if (BackLink && Keyword && Type && Status && Remark && TimeTaken) {
          const project = new SeoProjectSubmit({
            EmployeeId: emplyId,
            ProjectName:req.params.projectName,
            BackLink,
            Keyword,
            Type,
            Status,
            Remark,
            TimeTaken,
            date: new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
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
//....................................................get project status function   ProjectStatus()
async function ProjectStatus(req,res,Model){
  try {
    // console.log(req.params.id, "id");
    const data = await Model.find({ EmployeeId: req.params.id });
    console.log(data);
   return res.status(200).json({
      data: data,
      message: "got the status",
    });
  } catch (error) {
    return error
  }
}
EmployeeRouter.get("/proj/status/:id", async (req, res) => {
  await ProjectStatus(req,res,SeoProjectSubmit)
});
//....................................................get project Admin checks status function   ProjectDetailsStatus()
async function ProjectDetailsStatus(req,res,Model){
  try {
    // console.log(req.params.id, "id");
    const data = await Model.find({ EmployeeId: req.params.id,ProjectName:req.params.projectName });
    console.log(data);
   return res.status(200).json({
      data: data,
      message: "got the status",
    });
  } catch (error) {
    return error
  }
}
//.....SEO
EmployeeRouter.get("/proj/status/:id/:projectName", async (req, res) => {
  await ProjectDetailsStatus(req,res,SeoProjectSubmit)
});

//......................................Writer project post get  ......................

const WriterProjectSubmit = require("../../Schemas/Employee/ProjectSubmit/WriterProject");
EmployeeRouter.post("/writer/project/submit/:id", async (req, res) => {
  try {
    console.log(req,"req");
    const emplyId = req.params.id.toUpperCase();

    const formDataArray = req.body;
    const projects = [];
    // console.log(formDataArray, "formDataArray");

    // Iterating through form data array and creating new project documents
    if (formDataArray.length >= 1) {
      for (let i = 0; i < formDataArray.length; i++) {
        const formData = formDataArray[i];
        const {  ContentTitle, Keyword, Type, Plagiarism, Ai, WordCount } = formData;

        if (ContentTitle && Keyword && Type && Plagiarism && Ai && WordCount) {
          const project = new WriterProjectSubmit({
            EmployeeId: emplyId,
             ContentTitle,
             Keyword,
            Type,
            Plagiarism,
            Ai,
            WordCount,
           
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
// getting writer project status
EmployeeRouter.get("/writer/proj/status/:id", async (req, res) => {
  await ProjectStatus(req,res,WriterProjectSubmit)
});




const breakTime = require("../../Schemas/Employee/BreakTime")
EmployeeRouter.post("/breakTime/:id",async(req,res)=>{
       try {
        console.log(req.body);
            const {Date, BreakTaken} = req.body;
          const timeData = new breakTime({
            EmployeeId:req.params.id,
            Date,
            BreakTaken
          })
          await timeData.save();
          console.log(timeData);
          res.status(200).json(timeData);
       } catch (error) {
        console.log(error);
       }
})

EmployeeRouter.get("/previousbreakTime/:id/:date",async(req,res)=>{
  try {
   console.log(req.body);
    
     
     await breakTime.find({EmployeeId:req.params.id,Date:req.params.date} ).then((result)=>{

       res.status(200).json(result);
     })
    //  console.log(timeData);
  } catch (error) {
   console.log(error);
  }
})

EmployeeRouter.delete("/previousbreakTime/taken/:id/:date",async(req,res)=>{
  try {
   console.log(req.body);
    
     
     await breakTime.deleteMany({EmployeeId:req.params.id,Date:req.params.date} ).then((result)=>{

       res.status(200).json(result);
     })
    //  console.log(timeData);
  } catch (error) {
   console.log(error);
  }
})



module.exports = EmployeeRouter;
// 65449478aae261874b96830a

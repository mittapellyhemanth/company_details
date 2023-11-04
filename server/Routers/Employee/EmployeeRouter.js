const express = require("express");
const projectSchema = require("../../Schemas/Employee/Projects"); //schema
const LeaveSchema = require("../../Schemas/Employee/Leave");
const Seo = require("../../Schemas/Admin/Employees/SEO");
const Designer = require("../../Schemas/Admin/Employees/Designer");
const Writer = require("../../Schemas/Admin/Employees/Writer");
const Sales = require("../../Schemas/Admin/Employees/Sales");
const LoginDetails = require('../Login/Login')
const EmployeeRouter = express.Router();

require("dotenv").config();

EmployeeRouter.post("/login", async (req, res) => {
  const loginCred = req.body;
try {
    const SeoEmployee = await Seo.findOne({ email: loginCred.email  });
    if (SeoEmployee) {
     
      return  LoginDetails(req,res,SeoEmployee);
    }
    const DesignerEmployee = await Designer.findOne({ email: loginCred.email  });
   
    if (DesignerEmployee) {
   
        return  LoginDetails(req,res,DesignerEmployee);
                
    }
    const WriterEmployee = await Writer.findOne({ email: loginCred.email  });
    if (WriterEmployee) {
     
        return  LoginDetails(req,res,WriterEmployee);
    }
    const SalesEmployee = await Sales.findOne({ email: loginCred.email  });
    if (SalesEmployee) {
  
        return  LoginDetails(req,res,SalesEmployee);
    }
} catch (error) {
    res.status(500).json({
                message: "Internal server Error!!",
                error:err
              });
}

});

EmployeeRouter.post("/project", async (req, res) => {
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

EmployeeRouter.post("/leave", async (req, res) => {
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


// EmployeeRouter.get('/details/:id',async (req,res)=>{
//   console.log(getOneDesignation,'emdetails',req.params);
//   try {
//     const data = await Seo.findById(req.params.id);
//     res.status(200).json(data);
//     // console.log(data);
//   } catch (error) {
//     res.status(500).json({
//         message: "Internal server error",
//         error: err,
//       });
//   }
// })

module.exports = EmployeeRouter;
// 65449478aae261874b96830a
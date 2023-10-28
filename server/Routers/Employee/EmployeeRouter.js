const express = require("express");
const projectSchema = require("../../src/Schemas/Employee/Projects");  //schema
const LeaveSchema = require('../../src/Schemas/Employee/Leave')
const EmployeeRouter = express.Router();

require('dotenv').config();



EmployeeRouter.post("/project", async (req, res) => {
    
    try{
        const { BackLink, Keyword,Type,Status,Remark,TimeTaken } = req.body;
       
        const projectData = new projectSchema({                
    
            BackLink,               
            Keyword,     
            Type,
            Status,  //need to get the conditions
            Remark,
           TimeTaken
          
     })
    
     projectData.save()
            res.status(200).json({
                message: "data saved sucessfully"
            })
    }
       catch(err){
        res.status(500).json({
            message: "unable to save data",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
       }
   

})

EmployeeRouter.post("/leave", async (req, res) => {
    
    try{
        const { ReasonForAbsent,ChooseDate,NoOfDays} = req.body;
       
        const LeaveData = new LeaveSchema({                
    
            ReasonForAbsent,               
            ChooseDate,     
            NoOfDays,
     })
    
     LeaveData.save()
            res.status(200).json({
                message: " Leave data saved sucessfully"
            })
    }
       catch(err){
        res.status(500).json({
            message: "unable to save Leave data",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
       }
   

})


module.exports = EmployeeRouter;

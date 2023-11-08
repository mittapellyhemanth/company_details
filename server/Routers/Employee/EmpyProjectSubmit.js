
const express = require('express')
const SeoProjectSubmit = require('../../Schemas/Employee/ProjectSubmit/SeoProject')
const ProjectSubmit = express.Router()

ProjectSubmit.post = async(req,res)=>{
    try {
        // const formDataArray = req.body;
        // const projects = [];
    
        // Iterate through form data array and create project documents
        // for (const formData of formDataArray) {
            console.log(req);
          const { backLink, keyword, type, status, remark, timeTaken } =  req.body;
          const project = new SeoProjectSubmit({ backLink, keyword, type, status, remark, timeTaken });
        //   projects.push(project);
          await project.save()
        // }
    
        res.status(200).json(project);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}
module.exports = ProjectSubmit;
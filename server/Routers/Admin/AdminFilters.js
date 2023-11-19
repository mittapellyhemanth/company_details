const express = require("express");
const auth = require("../../Authentication/Auth");

const AdminFiltersRouter = express.Router();

const salesProjectFilter = require('../../Schemas/Employee/ProjectSubmit/SalesProject') 
const seoProjectFilter = require('../../Schemas/Employee/ProjectSubmit/SeoProject') 
const writerProjectFilter = require('../../Schemas/Employee/ProjectSubmit/WriterProject') 
const designerProjectFilter = require('../../Schemas/Employee/ProjectSubmit/DesignerProject') 

AdminFiltersRouter.get('/seo/search/:date/:type/:',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})















module.exports = AdminFiltersRouter
const express = require("express");
const addSuperAdmin = require('../../Schemas/CEO/Register');
const Post = require('../../Controllers/CRUD/POST');

const PostSuperAdmin = express.Router();;
PostSuperAdmin.post = async(req,res)=>{
    try {
        
      return  Post(req,res,addSuperAdmin)
        
    } catch (error) {
        return error
    }
}
module.exports = PostSuperAdmin
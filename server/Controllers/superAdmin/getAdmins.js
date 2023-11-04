const express = require("express");
const adminDetails = require("../../Schemas/SuperAdmin/AddAdmin"); //schema
const getOne = require('../CRUD/getOne')
const Get =  require('../CRUD/GET')
const getAdmins = {};

getAdmins.get = async(req,res)=>{
  try {
      
    return  Get(req,res,adminDetails)
      
  } catch (error) {
      return error
  }
}

getAdmins.getOne = async(req,res)=>{
  try {
  return  getOne(req,res,adminDetails)
      
  } catch (error) {
      return error
  }
}
module.exports = getAdmins;

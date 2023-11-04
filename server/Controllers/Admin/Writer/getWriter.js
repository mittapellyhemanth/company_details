const getWriter = require('../../../Schemas/Admin/Employees/Writer');
const Get = require('../../CRUD/GET');
const getOne = require('../../CRUD/getOne');

const WriterDetails = {};
WriterDetails.get = async(req,res)=>{
    try {
        
      return  Get(req,res,getWriter)
        
    } catch (error) {
        return error
    }
}

WriterDetails.getOne = async(req,res)=>{
  try {
  return  getOne(req,res,getWriter)
      
  } catch (error) {
      return error
  }
}
module.exports = WriterDetails
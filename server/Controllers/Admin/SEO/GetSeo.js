const getSeo = require('../../../Schemas/Admin/Employees/SEO');
const Get = require('../../CRUD/GET');
const getOne = require('../../CRUD/getOne');

const SeoDetails = {};
SeoDetails.get = async(req,res)=>{
    try {
        
      return  Get(req,res,getSeo)
        
    } catch (error) {
        return error
    }
}

SeoDetails.getOne = async(req,res)=>{
  try {
  return  getOne(req,res,getSeo)
      
  } catch (error) {
      return error
  }
}
module.exports = SeoDetails
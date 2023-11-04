const getDesginer = require('../../../Schemas/Admin/Employees/Designer');
const Get = require('../../CRUD/GET');
const getOne = require('../../CRUD/getOne')
const DesignerDetails = {};

DesignerDetails.get = async(req,res)=>{
    try {
        
      return  Get(req,res,getDesginer)
        
    } catch (error) {
        return error
    }
}

DesignerDetails.getOne = async(req,res)=>{
  try {
  return  getOne(req,res,getDesginer)
      
  } catch (error) {
      return error
  }
}
module.exports = DesignerDetails
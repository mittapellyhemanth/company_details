const addDesginer = require('../../../Schemas/Admin/Employees/Designer');
const Post = require('../../CRUD/POST');

const PostDesigner = {};
PostDesigner.post = async(req,res)=>{
    try {
        
      return  Post(req,res,addDesginer)
        
    } catch (error) {
        return error
    }
}
module.exports = PostDesigner
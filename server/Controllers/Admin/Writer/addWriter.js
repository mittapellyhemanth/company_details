const addWriter = require('../../../Schemas/Admin/Employees/Designer');
const Post = require('../../CRUD/POST');

const PostWriter = {};
PostWriter.post = async(req,res)=>{
    try {
        
      return  Post(req,res,addWriter)
        
    } catch (error) {
        return error
    }
}
module.exports = PostWriter
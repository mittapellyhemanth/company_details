const addWriter = require('../../../Schemas/Admin/Employees/Writer');
const Post = require('../../CRUD/POST');

const PostWriter = {};
PostWriter.post = async(req,res)=>{
  console.log(req.body);
    try {
        
      return  Post(req,res,addWriter,"WRITER")
        
    } catch (error) {
        return error
    }
}
module.exports = PostWriter
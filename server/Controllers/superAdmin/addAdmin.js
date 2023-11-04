const addAdmin = require('../../Schemas/SuperAdmin/AddAdmin');
const Post = require('../CRUD/POST');

const PostAdmin = {};
PostAdmin.post = async(req,res)=>{
    try {
        
      return  Post(req,res,addAdmin,"ADMIN")
        
    } catch (error) {
        return error
    }
}
module.exports = PostAdmin
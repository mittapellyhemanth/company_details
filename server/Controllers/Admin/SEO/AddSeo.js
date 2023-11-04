const addSEO = require('../../../Schemas/Admin/Employees/SEO');
const Post = require('../../CRUD/POST');

const PostSeo = {};
PostSeo.post = async(req,res)=>{
    try {
        
      return  Post(req,res,addSEO,'SEO')
        
    } catch (error) {
        return error
    }
}
module.exports = PostSeo

const mongoose = require("mongoose");

// ProjectName:{type:String},
const designerProjectSubmit =  mongoose.Schema({
  EmployeeId:{type:String},
  ProjectTitle:{ type: String },
  ImgTitle:{
    type: String,
    required: true,
  },
  PostImage:{
    type: String,
    required: true,
  },
  Type :{
    type : String,
    required: true,
    },
  
  description:{
    type: String,
    required: true,
  },
  Date:{type:String},

},
{
  timestamps  : true,
}
);

const DesignerPostModel = mongoose.model("designerProjectSubmit", designerProjectSubmit);

module.exports = DesignerPostModel;

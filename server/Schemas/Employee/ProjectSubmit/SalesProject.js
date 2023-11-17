
const mongoose = require("mongoose");

// ProjectName:{type:String},
const SalesProjectSubmit =  mongoose.Schema({
  EmployeeId:{type:String},
  ProjectTitle:{ type: String },
  Source:{
    type: String,
    required: true,
  },
  Enquiry:{
    type: String,
    required: true,
  },
  Remark :{
    type : String,
    required: true,
    },
  
    Status:{
    type: String,
    required: true,
  },
  Date:{type:String},

},
{
  timestamps  : true,
}
);

const SalesPostModel = mongoose.model("SalesProjectSubmit", SalesProjectSubmit);

module.exports = SalesPostModel;

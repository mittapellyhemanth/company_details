const mongoose = require("mongoose");

const WriterProjectSubmit =new mongoose.Schema({
    EmployeeId:{type:String},
    ProjectTitle:{ type: String },
    ContentTitle: { type: String},
    ContentLink: { type: String},
    Type: { type: String},
    Plagiarism: { type: Number },
    Ai: { type: Number },
    WordCount: { type: Number },
    Date:{type:String},
    
    },
    {
      timestamps  : true,
    })

const WriterProjectsModel = mongoose.model("WriterProjectSubmit", WriterProjectSubmit);

module.exports = WriterProjectsModel;
const mongoose = require("mongoose");

const WriterProjectSubmit =new mongoose.Schema({
    EmployeeId:{type:String},
    
    ContentTitle: { type: String},
    Keyword: { type: String},
    Type: { type: String},
    Plagiarism: { type: Number },
    Ai: { type: Number },
    WordCount: { type: Number },
    
})

const WriterProjectsModel = mongoose.model("WriterProjectSubmit", WriterProjectSubmit);

module.exports = WriterProjectsModel;
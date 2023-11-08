const mongoose = require("mongoose");

const WriterProjectSubmit =new mongoose.Schema({
    EmployeeId:{type:String},
    ContentTitle: { type: String},
    Keyword: { type: String},
    Type: { type: String},
    Plagiarism: { type: String },
    Ai: { type: String },
    WordCount: { type: String },
})

const WriterProjectsModel = mongoose.model("WriterProjectSubmit", WriterProjectSubmit);

module.exports = WriterProjectsModel;
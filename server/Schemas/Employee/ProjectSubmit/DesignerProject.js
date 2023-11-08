const mongoose = require("mongoose");

const DesignerProjectSubmit =new mongoose.Schema({
    EmployeeId:{type:String},
    Image: { type: File},
    Keyword: { type: String },
    Type: { type: String },
    Status: { type: String },
    Remark: { type: String },
    TimeTaken: { type: String },
})

const DesignerProjectsModel = mongoose.model("DesignerProjectSubmit", DesignerProjectSubmit);

module.exports = DesignerProjectsModel;
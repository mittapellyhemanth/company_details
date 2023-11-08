const mongoose = require("mongoose");

const SeoProjectSubmit =new mongoose.Schema({
    EmployeeId:{type:String},
    BackLink: { type: String},
    Keyword: { type: String },
    Type: { type: String },
    Status: { type: String },
    Remark: { type: String },
    TimeTaken: { type: String }

})

const SeoProjectsModel = mongoose.model("SeoProjectSubmit", SeoProjectSubmit);

module.exports = SeoProjectsModel;
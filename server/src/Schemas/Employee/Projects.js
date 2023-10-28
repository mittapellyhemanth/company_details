const mongoose = require("mongoose");

const Projects =new mongoose.Schema({
    BackLink: { type: String, required: true},
    Keyword: { type: String, required: true },
    Type: { type: String, required: true },
    Status: { type: String, required: true },
    Remark: { type: String, required: true },
    TimeTaken: { type: String, required: true },
})

const ProjectsModel = mongoose.model("Project", Projects);

module.exports = ProjectsModel;
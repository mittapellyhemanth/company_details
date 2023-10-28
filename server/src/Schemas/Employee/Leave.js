const mongoose = require("mongoose");

const Application_For_Leave =new mongoose.Schema({
    ReasonForAbsent: { type: String, required: true},
    ChooseDate: { type: String, required: true },
    NoOfDays: { type: Number, required: true },
  
})

const LeaveModel = mongoose.model("Application_For_Leave", Application_For_Leave);

module.exports = LeaveModel;
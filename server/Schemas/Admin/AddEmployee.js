const mongoose = require("mongoose");

const AddEmployee =new mongoose.Schema({
    AdminName: { type: String, required: true},
    Address: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Aadhaar: { type: Number, required: true },
})

const Admin_Add_EmployeesModel = mongoose.model("AddEmployee", AddEmployee);

module.exports = Admin_Add_EmployeesModel;
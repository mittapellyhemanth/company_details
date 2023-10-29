const mongoose = require("mongoose");

const AddEmployee =new mongoose.Schema({
    employeeName: { type: String, required: true},
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    aadhaar: { type: Number, required: true },
    unique_id:{ type: String}
})

const Admin_Add_EmployeesModel = mongoose.model("AddEmployee", AddEmployee);

module.exports = Admin_Add_EmployeesModel;
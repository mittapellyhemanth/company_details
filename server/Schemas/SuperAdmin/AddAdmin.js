const mongoose = require("mongoose");

const AddAdmin =new mongoose.Schema({
    Name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    unique_id:{ type: String}
    })

const AddAdminModel = mongoose.model("AddAdmin", AddAdmin);

module.exports = AddAdminModel;
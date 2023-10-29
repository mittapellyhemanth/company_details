const mongoose = require("mongoose");

const AddAdmin =new mongoose.Schema({
    AdminName: { type: String, required: true },
    Address: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    })

const AddAdminModel = mongoose.model("AddAdmin", AddAdmin);

module.exports = AddAdminModel;
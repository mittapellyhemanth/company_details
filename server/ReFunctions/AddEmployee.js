const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function AddEmployee(AddModel) {
    const schema = new Schema({
        Name: { type: String, required: true },
        address: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        aadhaar: { type: Number, required: true},
        });

    return mongoose.model(AddModel, schema);
}

module.exports = AddEmployee;

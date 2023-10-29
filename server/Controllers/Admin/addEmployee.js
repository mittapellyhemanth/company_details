const express = require("express");
const addEmployee = require("../../Schemas/Admin/AddEmployee");  //schema
const bcrypt = require('bcrypt')
const postEmployee = {};


postEmployee.post = async (req, res) => {
    let newEmployeeID ; 
    let previousEmployeeID =0; 

    // would give last registred user
    const lastEmployeeID = await addEmployee.findOne({}, {}, { sort: { _id: -1 } }, function (err, employeeID) {
        return employeeID;
    });
    
    if(lastEmployeeID != null){
          for(let i=5 ;i<lastEmployeeID.unique_id.length ;i++){
            previousEmployeeID+=lastEmployeeID.unique_id[i]
          }
          newEmployeeID = new Date().getFullYear()+"001" +(parseInt(previousEmployeeID) +1)
          
    }else{
        newEmployeeID =new Date().getFullYear()+"001";
    }
    const { employeeName, address, phoneNumber,email,password,aadhaar } = req.body;
    const ExsistingUser = await addEmployee.findOne({ email: email });  // check user exsists or not
    if (ExsistingUser) {
        return res.json({ error: 'User Exsists' });
    }
    const minLength = 8; // Minimum password length requirement
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Regular expression for special characters

    if (!password || password.length < minLength) {
        return res.json({ error: 'Password must be at least 8 characters' });
    }

    if (!specialCharacters.test(password)) {
        return res.json({ error: 'Password must contain at least one special character' });
    }

if(phoneNumber.toString().length<10 || phoneNumber.toString().length>10){  // check phoneNumber
    return res.json({ error: 'check phone number' });
}
if(aadhaar.toString().length<12 || aadhaar.toString().length>12){  // check phoneNumber
    return res.json({ error: 'check aadhaar number' });
}
    bcrypt.hash(password, 10).then(hashPass => { // encrypting password  times with bcrypt

        const employeeData = new addEmployee({
            employeeName, address, phoneNumber,email,aadhaar,
            password: hashPass,
            unique_id:newEmployeeID
        })

        // saving email and encrypted password to DB
        employeeData.save().then(result => {
            res.status(200).json({
                message: "User Created successfully!!",
                data: result,
            })
        }).catch(err => {
            // handle error if email is not found unique
            res.status(400).json({
                message: "Email already exist!!",
                errDesc: err
            })
        })
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            message: "Internal Server Error!!",

        })
    })


}

module.exports = postEmployee;

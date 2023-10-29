const express = require("express");
const addAdmin = require("../../Schemas/SuperAdmin/AddAdmin");  //schema
const bcrypt = require('bcrypt')
const postAdmin = {};


postAdmin.post = async (req, res) => {
    let newAdminID ; 
    let previousAdminID =0; 

    // would give last registred user
    const lastAdminID = await addAdmin.findOne({}, {}, { sort: { _id: -1 } }, function (err, AdminID) {
        return AdminID;
    });
    
    if(lastAdminID != null){
          for(let i=5 ;i<lastAdminID.unique_id.length ;i++){
            previousAdminID+=lastAdminID.unique_id[i]
          }
          newAdminID = new Date().getFullYear()+"100" +(parseInt(previousAdminID) +1)
          
    }else{
        newAdminID =new Date().getFullYear()+"100";
    }
    const { AdminName, Address,PhoneNumber,Email,Password} = req.body;
    const ExsistingUser = await addAdmin.findOne({ Email: Email });  // check user exsists or not
    if (ExsistingUser) {
        return res.json({ error: 'User Exsists' });
    }
    const minLength = 8; // Minimum password length requirement
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Regular expression for special characters

    if (!Password || Password.length < minLength) {
        return res.json({ error: 'Password must be at least 8 characters' });
    }

    if (!specialCharacters.test(Password)) {
        return res.json({ error: 'Password must contain at least one special character' });
    }
if(PhoneNumber.toString().length<10 || PhoneNumber.toString().length>10){  // check phoneNumber
    return res.json({ error: 'please enter exact number' });
}
    bcrypt.hash(Password, 10).then(hashPass => { // encrypting password  times with bcrypt

        const AdminData = new addAdmin({
            AdminName, Address,PhoneNumber, Email,
            Password: hashPass,
            unique_id:newAdminID
        })

        // saving email and encrypted password to DB
        AdminData.save().then(result => {
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





module.exports = postAdmin;

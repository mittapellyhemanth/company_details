const express = require("express");
const addAdmin = require("../../Schemas/SuperAdmin/AddAdmin");  //schema
const bcrypt = require('bcrypt')
const postAdmin = {};


postAdmin.post = async (req, res) => {
    
    try{
        // let employeeId ; 
        // // 
        // let previousEmployeeID =0; // it will store digit of last inserted of ppd_id
        
        // // would give last registred user
        // const lastUserID = await User.findOne({}, {}, { sort: { _id: -1 } }, function (err, userID) {
        //     return previousEmployeeID;
        // });
        
        // if(lastUserID != null){
        //     for(let i=5 ;i<lastUserID.unique_id.length ;i++){
        //         previousEmployeeID+=lastUserID.unique_id[i]
        //     }
        //     newUserID = "06PPD" +(parseInt(previousEmployeeID) +1)
            
        // }else{
        //     employeeId = "06PPD100";
        // }
        const {AdminName, Address,PhoneNumber,Email,Password} = req.body;
    
        // let ExsistingUser = await User.findOne({ Email: Email });
        // console.log(ExsistingUser,"ex");
        // if (ExsistingUser) {
        //     return res.json({ error: 'User Exsists' });
        // }
        // if(PhoneNumber.length<10 || PhoneNumber>10 ){
        //     return res.json({error:"please check phoneNumber"})
        // }
        // const minLength = 8; // Minimum password length requirement
        // const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Regular expression for special characters
    
        // if (!Password || Password.length < minLength) {
        //     return res.json({ error: 'Password must be at least 8 characters' });
        // }
    
        // if (!specialCharacters.test(Password)) {
        //     return res.json({ error: 'Password must contain at least one special character' });
        // }
    
        bcrypt.hash(Password, 10).then(hashPassword => { // encrypting password  times with bcrypt
    
            const projectData = new addAdmin({                
    
                AdminName,
                 Address,
                 PhoneNumber,
                 Email,
                Password : hashPassword,
                
                  
             })
    
            // saving email and encrypted password to DB
            projectData.save()
            res.status(200).json({
                message: "data saved sucessfully"
            }).catch(err => {
                // handle error if email is not found unique
                res.status(400).json({
                    message: "Email already exist!!",
                    errDesc: err
                })
            })
            
        })
    }
       catch(err){
        res.status(500).json({
            message: "unable to save data",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
       }
   

}





module.exports = postAdmin;

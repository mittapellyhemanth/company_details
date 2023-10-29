const express = require("express");
const User = require("../../Schemas/User/Register");  //schema
const AddAdminModel = require('../../Schemas/SuperAdmin/AddAdmin');
const userRouter = express.Router();
const LoginDetails = require('../../Routers/Login/Login')

const bcrypt = require("bcrypt")
require('dotenv').config();


userRouter.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const ExsistingUser = await User.findOne({ email: email });
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

    bcrypt.hash(password, 10).then(hashPass => { // encrypting password  times with bcrypt

        const userData = new User({
            email,
            password: hashPass,

        })

        // saving email and encrypted password to DB
        userData.save().then(result => {
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

})



module.exports = userRouter;
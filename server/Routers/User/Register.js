const express = require("express");
const User = require("../../src/Schemas/Register");  //schema
const userRouter = express.Router();
const jwt = require("jsonwebtoken")
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


userRouter.post("/login", async (req, res) => {
    const loginCred = req.body;
    User.findOne({ email: loginCred.email }).then(user => {
        if (user) {  // will give response from DB

            // if user found then it will encrypt password and compare with DB password 
            bcrypt.compare(loginCred.password, user.password).then(response => {
                if (response) {  // password is correct then create web token
                    const jwtToken = jwt.sign({
                        email: user.email,
                        id: user._id,

                    },
                        process.env.SECRET_KEY, {
                        expiresIn: "24h"
                    })
                    res.status(200).json({
                        message: "Login credential matched!!",
                        Token: jwtToken,
                        name: user.email.split("@")[0],
                        email: user.email,

                    })
                } else {
                    res.status(400).json({
                        message: "Email or password does not match!!"
                    })
                }
            })
        } else {
            res.status(400).json({
                message: "Email is not registered with us.."
            })
        }
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            message: "Internal server Error!!"
        })
    })
})

module.exports = userRouter;
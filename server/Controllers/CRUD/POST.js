
const bcrypt = require('bcrypt')
const Post =  async(req, res,UserModel,type)=>  {
console.log(req.body,'design');
  
 
    const { Name, address, phoneNumber,email,password,aadhaar } = req.body;
    const ExsistingUser = await UserModel.findOne({ email: email });  // check user exsists or not
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

        const employeeData = new UserModel({
            Name, address, phoneNumber,email,aadhaar,
            password: hashPass,
            designation:type
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

module.exports = Post;
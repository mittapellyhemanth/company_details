const bcrypt = require("bcrypt");
const Post = async (req, res, UserModel, type, AddedAdminId) => {
 

  let newUserID;

  let previousUserID = 0; // it will store digit of last inserted of ppd_id

  // would give last registred user
  const lastUserID = await UserModel.findOne(
    {},
    {},
    { sort: { _id: -1 } },
    function (err, userID) {
      return userID;
    }
  );

  if (lastUserID != null) {
    for (let i = 5; i < lastUserID.unique_id.length; i++) {
      previousUserID += lastUserID.unique_id[i];
    }

    newUserID =
      type.substring(0, 2) +
      new Date().getFullYear() +
      (parseInt(previousUserID) + 1);
  } else {
    newUserID = type.substring(0, 2) + new Date().getFullYear() + "01";
  }

  const {Name, phoneNumber, email, password, aadhaar } = req.body;
  // requestData = req.body;
  const ExsistingUser = await UserModel.findOne({ email: email }); // check user exsists or not
  if (ExsistingUser) {
    return res.json({ error: "User Exsists" });
  }
  const minLength = 8; // Minimum password length requirement
  const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Regular expression for special characters

  if (!password || password.length < minLength) {
    return res.json({ error: "Password must be at least 8 characters" });
  }

  if (!specialCharacters.test(password)) {
    return res.json({
      error: "Password must contain at least one special character",
    });
  }

  if (
    phoneNumber.toString().length < 10 ||
    phoneNumber.toString().length > 10
  ) {
    // check phoneNumber
    return res.json({ error: "check phone number" });
  }
  if (aadhaar.toString().length < 12 || aadhaar.toString().length > 12) {
    // check phoneNumber
    return res.json({ error: "check aadhaar number" });
  }

    if ( req.body.Name) {
      req.body.Name = req.body.Name.toUpperCase();
    }
   
  bcrypt
    .hash(password, 10)
    .then((hashPass) => {
      // encrypting password  times with bcrypt

      const employeeData = new UserModel({
        addedAdminId: AddedAdminId,
         
        ...req.body,
        password: hashPass,
        designation: type,
        unique_id: newUserID,
      });

      // saving email and encrypted password to DB
      employeeData
        .save()
        .then((result) => {
          res.status(200).json({
            message: "User Created successfully!!",
            data: result,
          });
        })
        .catch((err) => {
          // handle error if email is not found unique
          res.status(400).json({
            message: "Email already exist!!",
            errDesc: err,
          });
        });
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({
        message: "Internal Server Error!!",
      });
    });
};

module.exports = Post;

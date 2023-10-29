const mongoose = require("mongoose");

const Break =new mongoose.Schema({
   //need to check with client
  
})

const BreakModel = mongoose.model("Break", Break);

module.exports = BreakModel;
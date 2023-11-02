const express = require("express");
const adminDetails = require("../../Schemas/SuperAdmin/AddAdmin"); //schema
const getAdmins = {};

getAdmins.get = async (req, res) => {
  try {
    console.log("Getting the properties");

    await adminDetails.find().then((result) => {
        res.status(200).json({
          message: "Property details fetched successfully",
          data: result,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = getAdmins;

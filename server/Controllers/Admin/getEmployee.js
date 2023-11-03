const express = require("express");
const EmployeeDetails = require("../../Schemas/Admin/Employees/SEO"); //schema
const getEmployee = {};

getEmployee.get = async (req, res) => {
  try {
    console.log("Getting the properties");

    await EmployeeDetails.find().then((result) => {
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

module.exports = getEmployee;

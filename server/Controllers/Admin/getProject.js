const express = require("express");
const ProjectsDetails = require("../../Schemas/Admin/AddProjects"); //schema
const getProjects = {};

getProjects.get = async (req, res) => {
  try {
    console.log("Getting the properties");

    await ProjectsDetails.find().then((result) => {
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

module.exports = getProjects;

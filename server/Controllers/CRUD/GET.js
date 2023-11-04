
// const ProjectsDetails = require("../../Schemas/Admin/AddProjects"); //schema


const GET = async (req, res,designation) => {
  try {
    console.log("Getting the properties");

    await designation.find().then((result) => {
        res.status(200).json({
          message: "Property details fetched successfully",
          data: result,
        });
      });
  } catch (error) {
    
      return error
   
  }
};

module.exports = GET;

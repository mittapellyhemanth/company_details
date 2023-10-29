const express = require("express");

const SuperAdminRouter = express.Router();

require('dotenv').config();
const postAdmin = require('../../Controllers/superAdmin/addAdmin')
SuperAdminRouter.post('/addAdmin',postAdmin.post);

module.exports = SuperAdminRouter;
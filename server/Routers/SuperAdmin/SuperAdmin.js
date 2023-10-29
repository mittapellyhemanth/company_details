const express = require("express");

const SuperAdminRouter = express.Router();

require('dotenv').config();
const postAdmin = require('../../Controllers/superAdmin/addAdmin')
SuperAdminRouter.post('/addAdmin',postAdmin.post);

const getAdmins = require('../../Controllers/superAdmin/getAdmins');
SuperAdminRouter.get('/admins',getAdmins.get)

module.exports = SuperAdminRouter;
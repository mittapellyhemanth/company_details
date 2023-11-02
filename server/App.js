const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({}));
app.use(bodyParser.json());

//Routers  
const userRouter = require('./Routers/Register/Register');
const employeeRouter = require('./Routers/Employee/EmployeeRouter');
const AdminRouter = require('./Routers/Admin/AdminRouter');
const SuperAdmin = require('./Routers/SuperAdmin/SuperAdmin')
const port = process.env.PORT;
const URL = process.env.DB_URL;

const start = async () => {
  await app.listen(port, () => console.log(`connected to the port ${port}`));
  await mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedToPology: true,
    })
    .then((res) => console.log("connected to db"));
};

start();
// console.log(new Date().getFullYear());

let projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted = ''
const data = { projectName, websiteAddress, clientName, startDate, monthlyPrice, employeeAlloted }
console.log({...data});

app.use("/user",userRouter); // Login Router
app.use("/employee",employeeRouter); // Employee Router
app.use("/admin",AdminRouter); // Admin Router
app.use("/superAdmin",SuperAdmin)
module.exports = start;
// To start the serverrs

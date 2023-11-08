const express = require('express');
const createSchema = require('../../ReFunctions/AddEmployee'); // Import the schema creation function

const userModel = createSchema('Admin'); // Create the dynamic model with the name 'User'

module.exports = userModel